from flask import Flask, jsonify, request
import pandas as pd
import joblib
import shap
import base64
import io
import matplotlib.pyplot as plt

app = Flask(__name__)

@app.route("/predict", methods=['POST'])
def do_prediction():
    json = request.get_json()
    df = pd.DataFrame(json, index=[0])

    # predict
    model = joblib.load('models/rf_model_v3.pkl')
    y_predict = model.predict(df)
    predicted_cancer = int(y_predict[0])
    
    # shap
    explainer = joblib.load(filename="shap/explainer_v3.bz2")
    shap_values = explainer.shap_values(df)

    shap.force_plot(explainer.expected_value, shap_values, df, matplotlib=True, show=False, plot_cmap=['#77dd77', '#f99191'])

    buf = io.BytesIO()
    plt.savefig(buf,
                format = "png",
                dpi = 150,
                bbox_inches = 'tight')
    force_plt = base64.b64encode(buf.getbuffer()).decode("ascii")

    # return
    result_map = {1: 'No', 2: 'Yes'}
    return jsonify({'cancer': result_map[predicted_cancer], 'force_plt': force_plt})

@app.route("/predict-bad", methods=['POST'])
def do_bad_prediction():
    json = request.get_json()
    df = pd.DataFrame(json, index=[0])

    # predict
    model = joblib.load('models/rf_model_bad_v1.pkl')
    y_predict = model.predict(df)
    predicted_cancer = int(y_predict[0])

    # shap (for debugging only, not used in the app)
    explainer = joblib.load(filename="shap/explainer_bad_v1.bz2")
    shap_values = explainer.shap_values(df)

    shap.force_plot(explainer.expected_value, shap_values, df, matplotlib=True, show=False, plot_cmap=['#77dd77', '#f99191'])

    buf = io.BytesIO()
    plt.savefig(buf,
                format = "png",
                dpi = 150,
                bbox_inches = 'tight')
    force_plt = base64.b64encode(buf.getbuffer()).decode("ascii")

    # return
    result_map = {1: 'No', 2: 'Yes'}
    return jsonify({'cancer': result_map[predicted_cancer], 'force_plt': force_plt})

if __name__ == "__main__":
    port = 5000
    app.run(host='0.0.0.0', port=port)
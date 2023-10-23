from flask import Flask, jsonify, request
import pandas as pd
import joblib

app = Flask(__name__)

@app.route("/predict", methods=['POST'])
def do_prediction():
    json = request.get_json()
    df = pd.DataFrame(json, index=[0])

    model = joblib.load('models/rf_model.pkl')
    y_predict = model.predict(df)
    predicted_cancer = int(y_predict[0])
    
    result_map = {1: 'No', 2: 'Yes'}
    return jsonify({'cancer': result_map[predicted_cancer]})

if __name__ == "__main__":
    port = 5000
    app.run(host='0.0.0.0', port=port)
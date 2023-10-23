FROM python:3.10
WORKDIR /app 
RUN pip install pandas scikit-learn flask
ADD ./models ./models
ADD server.py server.py
EXPOSE 5000
CMD ["python", "server.py"]

from flask import Flask, request, jsonify
from Model_files.ML_model import predict_career
from flask_cors import CORS, cross_origin
import pickle


app=Flask("predict_car")
CORS(app, support_credentials=True)
@app.route('/',methods=["POST"])
@cross_origin(supports_credentials=True)
def predict_c():
    survey_res=request.get_json()
    with open("./Model_files/finalized_model.bin",'rb') as f_in:
        model=pickle.load(f_in)
        f_in.close()
    pred=predict_career(survey_res,model)
    response={"Career":str(pred)}
    return jsonify(response)


if __name__=='__main__':
    app.run(debug=True,host="localhost",port=5000)
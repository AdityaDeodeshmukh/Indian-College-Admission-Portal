import pandas as pd
from sklearn import preprocessing
from sklearn.neighbors import KNeighborsClassifier
def predict_career(dat,model):
   if type(dat)==dict:
          df=pd.DataFrame(dat,index=[0])
   else:
          df=dat
   y_pr=model.predict(df)
   return y_pr
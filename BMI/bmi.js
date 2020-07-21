function calculateBmi() {
    var weight = document.bmiForm.weight.value
    var height = document.bmiForm.height.value
    var age = document.bmiForm.age.value
    if(weight > 0 && height > 0){	
    
    var bmi= weight/(height/100*height/100);
    
    var finalBmi = Number(bmi).toFixed(2);
    

    var ele = document.getElementsByName('gender'); 
          
          for(i = 0; i < ele.length; i++) { 
              if(ele[i].checked){ 
              document.getElementById("result").innerHTML
                      = ele[i].value; 
            var gendertype = ele[i].value;
              }

            }

    document.bmiForm.bmi.value = finalBmi


    //Adult BMI calculation

      if(finalBmi < 18.5 && age>18){
    document.bmiForm.meaning.value = "That you are UnderWeight"
    }
    if(finalBmi > 18.5 && finalBmi < 25 && age>18){
    document.bmiForm.meaning.value = "That you are Healthy."
    }
    if(finalBmi > 25 && age>18){
    document.bmiForm.meaning.value = "That you have Overweight."
    }
    


    
    //Young BMI calculation
    
    
    //female

      if(gender="Female"){

        if(finalBmi > 12.7 && finalBmi <= 17 && age==5){
            document.bmiForm.meaning.value = "That you are Healthy"
            }
            if(finalBmi > 17 && finalBmi <= 18.9 && age==5){
            document.bmiForm.meaning.value = "That you are Overweight."
            }
            if(finalBmi > 18.9 && age==5){
            document.bmiForm.meaning.value = "That you have Obese."
            }

            if(finalBmi > 12.7 && finalBmi <= 17 && age==6){
                document.bmiForm.meaning.value = "That you are Healthy"
                }
                if(finalBmi > 17 && finalBmi <= 19.2 && age==6){
                document.bmiForm.meaning.value = "That you are Overweight."
                }
                if(finalBmi > 19.2 && age==6){
                document.bmiForm.meaning.value = "That you have Obese."
                }

            if(finalBmi > 12.7 && finalBmi <= 17.3 && age==7){
                document.bmiForm.meaning.value = "That you are Healthy"
                   }
                    if(finalBmi > 17.3 && finalBmi <= 19.8 && age==7){
                    document.bmiForm.meaning.value = "That you are Overweight."
                    }
                    if(finalBmi > 19.8 && age==7){
                    document.bmiForm.meaning.value = "That you have Obese."
                    }    
            if(finalBmi > 12.9 && finalBmi <= 17.7 && age==8){
                     document.bmiForm.meaning.value = "That you are Healthy"
                    }
                        if(finalBmi > 17.7 && finalBmi <= 20.6 && age==8){
                        document.bmiForm.meaning.value = "That you are Overweight."
                        }
                        if(finalBmi > 20.6 && age==8){
                        document.bmiForm.meaning.value = "That you have Obese."
                        }

                        if(finalBmi > 13.1 && finalBmi <= 18.3 && age==9){
                            document.bmiForm.meaning.value = "That you are Healthy"
                            }
                            if(finalBmi > 18.3 && finalBmi <= 21.5 && age==9){
                            document.bmiForm.meaning.value = "That you are Overweight."
                            }
                            if(finalBmi > 21.5 && age==9){
                            document.bmiForm.meaning.value = "That you have Obese."
                            }
                            
                            if(finalBmi > 13.5 && finalBmi <= 19 && age==10){
                                document.bmiForm.meaning.value = "That you are Healthy"
                                }
                                if(finalBmi > 19 && finalBmi <= 22.6 && age==10){
                                document.bmiForm.meaning.value = "That you are Overweight."
                                }
                                if(finalBmi > 22.6 && age==10){
                                document.bmiForm.meaning.value = "That you have Obese."
                                }

                                if(finalBmi > 13.9 && finalBmi <= 19.9 && age==11){
                                    document.bmiForm.meaning.value = "That you are Healthy"
                                    }
                                    if(finalBmi > 19.9 && finalBmi <= 23.7 && age==11){
                                    document.bmiForm.meaning.value = "That you are Overweight."
                                    }
                                    if(finalBmi > 23.7 && age==11){
                                    document.bmiForm.meaning.value = "That you have Obese."
                                    }

                                    if(finalBmi > 14.4 && finalBmi <= 20.8 && age==12){
                                        document.bmiForm.meaning.value = "That you are Healthy"
                                        }
                                        if(finalBmi > 20.8 && finalBmi <= 25 && age==12){
                                        document.bmiForm.meaning.value = "That you are Overweight."
                                        }
                                        if(finalBmi > 25 && age==12){
                                        document.bmiForm.meaning.value = "That you have Obese."
                                        }  

                                        if(finalBmi > 14.9 && finalBmi <= 21.8 && age==13){
                                            document.bmiForm.meaning.value = "That you are Healthy"
                                            }
                                            if(finalBmi > 21.8 && finalBmi <= 26.2 && age==13){
                                            document.bmiForm.meaning.value = "That you are Overweight."
                                            }
                                            if(finalBmi > 26.2 && age==13){
                                            document.bmiForm.meaning.value = "That you have Obese."
                                            }

                                            if(finalBmi > 15.4 && finalBmi <= 22.7 && age==14){
                                                document.bmiForm.meaning.value = "That you are Healthy"
                                                }
                                                if(finalBmi > 22.7 && finalBmi <= 27.3 && age==14){
                                                document.bmiForm.meaning.value = "That you are Overweight."
                                                }
                                                if(finalBmi > 27.2 && age==14){
                                                document.bmiForm.meaning.value = "That you have Obese."
                                                }    


                                                if(finalBmi > 15.9 && finalBmi <= 23.5 && age==15){
                                                    document.bmiForm.meaning.value = "That you are Healthy"
                                                    }
                                                    if(finalBmi > 23.5 && finalBmi <= 28.2 && age==15){
                                                    document.bmiForm.meaning.value = "That you are Overweight."
                                                    }
                                                    if(finalBmi > 28.2 && age==15){
                                                    document.bmiForm.meaning.value = "That you have Obese."
                                                    }      

                                                    if(finalBmi > 16.2 && finalBmi <= 24.1 && age==16){
                                                        document.bmiForm.meaning.value = "That you are Healthy"
                                                        }
                                                        if(finalBmi > 24.1 && finalBmi <= 28.9 && age==16){
                                                        document.bmiForm.meaning.value = "That you are Overweight."
                                                        }
                                                        if(finalBmi > 28.9 && age==16){
                                                        document.bmiForm.meaning.value = "That you have Obese."
                                                        }   

                                                        if(finalBmi > 16.4 && finalBmi <= 24.5 && age==17){
                                                            document.bmiForm.meaning.value = "That you are Healthy"
                                                            }
                                                            if(finalBmi > 24.1 && finalBmi <= 28.9 && age==17){
                                                            document.bmiForm.meaning.value = "That you are Overweight."
                                                            }
                                                            if(finalBmi > 28.9 && age==17){
                                                            document.bmiForm.meaning.value = "That you have Obese."
                                                            }

                                                            if(finalBmi > 16.4 && finalBmi <= 24.8 && age==18){
                                                                document.bmiForm.meaning.value = "That you are Healthy"
                                                                }
                                                                if(finalBmi > 24.8 && finalBmi <= 29.5 && age==18){
                                                                document.bmiForm.meaning.value = "That you are Overweight."
                                                                }
                                                                if(finalBmi > 29.5 && age==18){
                                                                document.bmiForm.meaning.value = "That you have Obese."
                                                                }

                                                  


        }




        //Male

        if(gender="Male"){

            if(finalBmi > 13 && finalBmi <= 16.6 && age==5){
                document.bmiForm.meaning.value = "That you are Healthy"
                }
                if(finalBmi > 16.6 && finalBmi <= 18.3 && age==5){
                document.bmiForm.meaning.value = "That you are Overweight."
                }
                if(finalBmi > 18.3 && age==5){
                document.bmiForm.meaning.value = "That you have Obese."
                }
    
                if(finalBmi > 13 && finalBmi <= 16.8 && age==6){
                    document.bmiForm.meaning.value = "That you are Healthy"
                    }
                    if(finalBmi > 16.8 && finalBmi <= 18.5 && age==6){
                    document.bmiForm.meaning.value = "That you are Overweight."
                    }
                    if(finalBmi > 18.5 && age==6){
                    document.bmiForm.meaning.value = "That you have Obese."
                    }
    
                if(finalBmi > 13.1 && finalBmi <= 17 && age==7){
                    document.bmiForm.meaning.value = "That you are Healthy"
                       }
                        if(finalBmi > 17 && finalBmi <= 19 && age==7){
                        document.bmiForm.meaning.value = "That you are Overweight."
                        }
                        if(finalBmi > 19 && age==7){
                        document.bmiForm.meaning.value = "That you have Obese."
                        }    
                if(finalBmi > 13.3 && finalBmi <= 17.4 && age==8){
                         document.bmiForm.meaning.value = "That you are Healthy"
                        }
                            if(finalBmi > 17.4 && finalBmi <= 19.7 && age==8){
                            document.bmiForm.meaning.value = "That you are Overweight."
                            }
                            if(finalBmi > 19.7 && age==8){
                            document.bmiForm.meaning.value = "That you have Obese."
                            }
    
                            if(finalBmi > 13.5 && finalBmi <= 17.9 && age==9){
                                document.bmiForm.meaning.value = "That you are Healthy"
                                }
                                if(finalBmi > 17.9 && finalBmi <= 20.5 && age==9){
                                document.bmiForm.meaning.value = "That you are Overweight."
                                }
                                if(finalBmi > 20.5 && age==9){
                                document.bmiForm.meaning.value = "That you have Obese."
                                }
                                
                                if(finalBmi > 13.7 && finalBmi <= 18.5 && age==10){
                                    document.bmiForm.meaning.value = "That you are Healthy"
                                    }
                                    if(finalBmi > 18.5 && finalBmi <= 21.4 && age==10){
                                    document.bmiForm.meaning.value = "That you are Overweight."
                                    }
                                    if(finalBmi > 21.4 && age==10){
                                    document.bmiForm.meaning.value = "That you have Obese."
                                    }
    
                                    if(finalBmi > 14.1 && finalBmi <= 19.2 && age==11){
                                        document.bmiForm.meaning.value = "That you are Healthy"
                                        }
                                        if(finalBmi > 19.2 && finalBmi <= 22.5 && age==11){
                                        document.bmiForm.meaning.value = "That you are Overweight."
                                        }
                                        if(finalBmi > 22.5 && age==11){
                                        document.bmiForm.meaning.value = "That you have Obese."
                                        }
    
                                        if(finalBmi > 14.5 && finalBmi <= 19.9 && age==12){
                                            document.bmiForm.meaning.value = "That you are Healthy"
                                            }
                                            if(finalBmi > 19.9 && finalBmi <= 23.6 && age==12){
                                            document.bmiForm.meaning.value = "That you are Overweight."
                                            }
                                            if(finalBmi > 23.6 && age==12){
                                            document.bmiForm.meaning.value = "That you have Obese."
                                            }  
    
                                            if(finalBmi > 14.9 && finalBmi <= 20.8 && age==13){
                                                document.bmiForm.meaning.value = "That you are Healthy"
                                                }
                                                if(finalBmi > 20.8 && finalBmi <= 24.8 && age==13){
                                                document.bmiForm.meaning.value = "That you are Overweight."
                                                }
                                                if(finalBmi > 24.8 && age==13){
                                                document.bmiForm.meaning.value = "That you have Obese."
                                                }
    
                                                if(finalBmi > 15.5 && finalBmi <= 21.8 && age==14){
                                                    document.bmiForm.meaning.value = "That you are Healthy"
                                                    }
                                                    if(finalBmi > 21.8 && finalBmi <= 25.9 && age==14){
                                                    document.bmiForm.meaning.value = "That you are Overweight."
                                                    }
                                                    if(finalBmi > 25.9 && age==14){
                                                    document.bmiForm.meaning.value = "That you have Obese."
                                                    }    
    
    
                                                    if(finalBmi > 16 && finalBmi <= 22.7 && age==15){
                                                        document.bmiForm.meaning.value = "That you are Healthy"
                                                        }
                                                        if(finalBmi > 22.7 && finalBmi <= 27 && age==15){
                                                        document.bmiForm.meaning.value = "That you are Overweight."
                                                        }
                                                        if(finalBmi > 27 && age==15){
                                                        document.bmiForm.meaning.value = "That you have Obese."
                                                        }      
    
                                                        if(finalBmi > 16.5 && finalBmi <= 23.5 && age==16){
                                                            document.bmiForm.meaning.value = "That you are Healthy"
                                                            }
                                                            if(finalBmi > 23.5 && finalBmi <= 27.9 && age==16){
                                                            document.bmiForm.meaning.value = "That you are Overweight."
                                                            }
                                                            if(finalBmi > 27.9 && age==16){
                                                            document.bmiForm.meaning.value = "That you have Obese."
                                                            }   
    
                                                            if(finalBmi > 16.9 && finalBmi <= 24.3 && age==17){
                                                                document.bmiForm.meaning.value = "That you are Healthy"
                                                                }
                                                                if(finalBmi > 24.3 && finalBmi <= 28.6 && age==17){
                                                                document.bmiForm.meaning.value = "That you are Overweight."
                                                                }
                                                                if(finalBmi > 28.6 && age==17){
                                                                document.bmiForm.meaning.value = "That you have Obese."
                                                                }
    
                                                                if(finalBmi > 17 && finalBmi <= 24.9 && age==18){
                                                                    document.bmiForm.meaning.value = "That you are Healthy"
                                                                    }
                                                                    if(finalBmi > 24.9 && finalBmi <= 29.2 && age==18){
                                                                    document.bmiForm.meaning.value = "That you are Overweight."
                                                                    }
                                                                    if(finalBmi > 29.2 && age==18){
                                                                    document.bmiForm.meaning.value = "That you have Obese."
                                                                    }
    
                                                      
    
    
            }

    


                  
    }


}
                 
                          
                        
            

           



    
   

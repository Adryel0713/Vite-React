const Weather = ({temperature}) => {



    const temp = () => {

        let weatherMsg;

        if(temperature < 15){
            weatherMsg = <h1>It's Cold</h1>
        }else if(temperature >= 15 && temperature <= 30){
            weatherMsg = <h1>It's Moderate</h1>
        }else{
            weatherMsg = <h1>It's Hot</h1>;
        }

        return weatherMsg;
    }
  return (
    <div>
        {temp()} 
    </div>
  );
};

export default Weather
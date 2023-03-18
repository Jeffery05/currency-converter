// interface to determine the props that are recieved 
interface ResultProps{
  currency1: string;
  currency2: string;
  amount: number;
}

function Result({currency1, currency2, amount}: ResultProps) {

  return (
    <>
      <div className="containe allMar">
        <h3>Conversion:</h3>
        <hr></hr>
        <div className="row text-center">
          <h3>${amount} {currency1} = $1.25 {currency2}</h3>
        </div>
      </div>
    </>
  );
}

export default Result;

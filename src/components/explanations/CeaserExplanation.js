const CeaserExplanation = ({ plainText, key }) => {
  return (
    <div>
      {plainText.split("").map((char) => {
        return (
          <>
            <div>{char}</div>
          </>
        );
      })}
      <div></div>
    </div>
  );
};

const intermediateCharacters = (char, key) => {
  var charCode = char.charCodeAt(0) + key;
  const newCharCode = char.charCodeAt(0) + key;
  if(charCode<65){
    charCode += 26;
  }
  return <div>{[...Array(key).keys()].map((num) => {
    
  })}</div>;
};


function move(props,prop2){
    return(
console.log(props,prop2)
    );
}

function move2(prop){
    // return(
    //     console.log(prop.target.value)
    // );
    return(
        stub.PostModelOutputs(
            {
                model_id: "{THE_MODEL_ID}",
                inputs: [
                    {data: {image: {url: "https://samples.clarifai.com/metro-north.jpg"}}}
                ]
            },
            metadata,
            (err, response) => {
                console.log("Predicted concepts:");
                for (const concept of response.outputs[0].data.concepts) {
                    console.log(concept.name + " " + concept.value);
                }
            }
        )
    );
}

function Imagelinkform(){
    return(
        <div>
                <input id='aa' type="text" style={{width:"400px"}} class={{}} 
                onChange={
                   (i)=> move2(i)
                } /><br></br><br></br>
                <button onClick={
                 ()=>  move('const','fuck')
                }>detect</button>
        </div>
    );
}
export default Imagelinkform;
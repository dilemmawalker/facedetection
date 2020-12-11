
function move(props,prop2){
    return(
console.log(props,prop2)
    );
}

function Imagelinkform(){
    return(
        <div>
                <input type="text" style={{width:"400px"}} class={{}}  /><br></br><br></br>
                <button onClick={
                 ()=>  move('const','fuck')
                }>detect</button>
        </div>
    );
}
export default Imagelinkform;

function Bubble({ children , className}){
    return (
        <b className={"bubble " + (className ? className : "")}>
            {children}
        </b>
    );
}

export default Bubble;
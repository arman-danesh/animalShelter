export default function CheckBox(props){
    return(
        <div className="form-check form-check-reverse my-1">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label text-light fs_13px" htmlFor="flexCheckDefault">
                {props.text}
            </label>
        </div>
    );
}
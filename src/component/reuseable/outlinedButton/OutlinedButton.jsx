
const OutlinedButton = (props) => {
    return (

        <button className="border border-white text-blue-500 py-3 px-4 hover:bg-white hover:text-blue-700 font-bold text-xl transition duration-300 ease-in-out">
            {props.children}
        </button>
    );
}
export default OutlinedButton;
export default function LoginMsg(props) {
  return props.trigger ? (
    <div
      className="bg-red-100 border border-red-400 text-red-700 w-2/4 px-3 py-2 rounded absolute z-10 "
      role="alert"
    >
      <span className="block sm:inline">{props.title}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
      <button
        className="absolute  bg-slate-300  text-md text-stone-900 flex justify-center"
        style={{
          right: "-5px",
          top: "-5px",
          borderRadius: "50%",
          width: "1.3rem",
          height: "1.3rem",
        }}
        onClick={() => props.setTrigger(false)}
      >
        X
      </button>
    </div>
  ) : (
    ""
  );
}

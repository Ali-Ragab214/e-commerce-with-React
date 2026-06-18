export default function ErrorMessage({ message = "Something went wrong." }) {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <div className="text-5xl mb-4">😕</div>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">Oops!</h2>
        <p className="text-slate-400 text-sm">{message}</p>
      </div>
    </div>
  );
}
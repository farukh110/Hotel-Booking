import { useState, CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };

    return (
        <div className="sweet-loading text-center">

            <ScaleLoader
                color="#000000"
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loader;
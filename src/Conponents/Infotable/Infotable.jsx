const Infotable = () => {
    return (
        <div className="container mt-5">
            <h3>Additional information</h3>
            <table className="table table-bordered w-20">
                <thead>
                    <tr>
                        <td><p>Brand</p > </td>
                        <td><b>Lenovo</b></td>
                    </tr>
                    <tr>
                        <td><p>Model</p></td>
                        <td><b>P8</b></td>
                    </tr>
                    <tr>
                        <td><p>OS</p></td>
                        <td><b>Android 6.0</b></td>
                    </tr>
                    <tr>
                        <td><p>CPU</p></td>
                        <td><b>Qualcomm Snapdragon 625 Octa Core 64bit</b></td>
                    </tr>
                    <tr>
                        <td><p>RAM</p></td>
                        <td><b>LP DDR3 3GB</b></td>
                    </tr>
                    <tr>
                        <td><p>ROM</p></td>
                        <td><b>16GB eMMC</b></td>
                    </tr>
                    <tr>
                        <td><p>Screen size</p></td>
                        <td><b>8INCH</b></td>
                    </tr>
                    <tr>
                        <td><p>Rear Camera</p></td>
                        <td><b>8.0mp</b></td>
                    </tr>

                </thead>

            </table>
        </div>
    )
}
export default Infotable;
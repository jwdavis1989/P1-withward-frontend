import React from 'react';
import Withlist from './withlist';
import logo from "../../Resources/Images/withward_icon_rainbow.png";

const WithlistTable = ({withlists, refreshWithlists})=>{
    return (
        <div id="generic-menu">
            <section id="withlist-list-main">
            <h1><img id='withward-logo' src={logo} alt="Withward Logo"></img>Withlists</h1>
            <button className="btn" onClick={refreshWithlists}>Refresh</button>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Withlist ID</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody id="withlist-table-data">
                    {
                        withlists.map(withlist=> 
                            (<Withlist withlist={withlist} key={withlist.id}/>)
                        )
                    }
                </tbody>
            </table>
            </section>
        </div>
    );
}

export default WithlistTable;
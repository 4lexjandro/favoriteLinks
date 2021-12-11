import React from 'react';


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th> Name </th>
                <th> URL </th>
                <th> Remove </th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    // boilerplate table body functional component
    // we use Array.map to create table rows from LinkData passed via props
    const rows = props.linkData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td><a href={row.URL}>{row.URL}</a></td>
                <td><button onClick={() => props.RemoveTheLink(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
//    const { linkData, removeLink } = props;
    return (
    <table>
        <TableHeader/>
        <TableBody linkData = {props.linkData} RemoveTheLink = {props.RemoveTheLink}/>
    </table>)

}

//props are needed to be passed through parent components so forms can communicate with table !

export default Table;

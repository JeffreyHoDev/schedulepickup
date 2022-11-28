import './table.styles.scss'

import Table from 'react-bootstrap/Table'

const TableComponent = ({ headers, data, Components }) => {


    return (
        <>
            <div className='table-component'>
                <Table striped responsive>
                    <thead>
                        <tr>
                            {
                                headers.map((header,index) => {
                                    return <th key={`header-key-${index}`}>{header.label}</th>
                                })
                            }
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((single, index) => {
                                return (
                                    <tr key={`row-data-${index}`}>
                                        {<td>{index+1}</td>}
                                        {
                                            headers.map((header, subIndex) => {
                                                return (
                                                    header.field === 'index'? null : <td key={`data-table-key-${subIndex}`}>{single[header.field]}</td>
                                                )
                                            })
                                        }
                                        <td><Components index={index}/></td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default TableComponent
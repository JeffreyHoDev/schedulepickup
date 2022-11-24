import './table.styles.scss'

import Table from 'react-bootstrap/Table'

const TableComponent = ({ headers, data }) => {
    return (
        <>
            <div className='table-component'>
                <Table striped responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Guardian</th>
                        <th>Passengers List</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Jeff, John, Adam</td>
                            <td>84276055</td>
                            <td>mark@dummy.com</td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Ron</td>
                            <td>Jeff, John, Adam</td>
                            <td>84276055</td>
                            <td>ron@dummy.com</td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Paul</td>
                            <td>Jeff, John, Adam</td>
                            <td>84276055</td>
                            <td>paul@dummy.com</td>
                            <td>Action</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default TableComponent
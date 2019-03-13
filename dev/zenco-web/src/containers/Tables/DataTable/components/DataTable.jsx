/* eslint-disable react/no-unused-state,react/no-unescaped-entities */
import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import DataPaginationTable from '../../../../shared/components/table/DataPaginationTable';
import Pagination from '../../../../shared/components/pagination/Pagination';

export default class DataTable extends PureComponent {
    constructor() {
        super();
        this.heads = [
            {
                key: 'id',
                name: '#',
                width: 80,
            },
            {
                key: 'first',
                name: 'First Name',
                sortable: false,
            },
            {
                key: 'last',
                name: 'Last Name',
                sortable: false,
            },
            {
                key: 'user',
                name: 'Username',
                sortable: false,
            },
            {
                key: 'age',
                name: 'Age',
                sortable: false,
            },
            {
                key: 'date',
                name: 'Date',
                sortable: false,
            },
            {
                key: 'location',
                name: 'Location',
                sortable: false,
            },
            {
                key: 'work',
                name: 'Work',
                sortable: false,
            },
        ];
        
        const initialPageNumber = 1;
        const initialRowsCount = 10;
        
        const minRows = 20;
        const maxRows = 41;
        const rowsCount = Math.random() * (maxRows - minRows);
        
        const originalRows = this.createRows(rowsCount + minRows);
        const currentPageRows = this.filterRows(originalRows, initialPageNumber, initialRowsCount);
        
        this.state = {
            rows: originalRows,
            rowsToShow: currentPageRows,
            pageOfItems: initialPageNumber,
            itemsToShow: initialRowsCount,
        };
    }
    
    onChangePage = (pageOfItems) => {
        if (pageOfItems) {
            const rowsToShow = this.filterRows(this.state.rows, pageOfItems, this.state.itemsToShow);
            this.setState({rowsToShow, pageOfItems});
        }
    };
    
    getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
        - start.getTime()))).toLocaleDateString();
    
    createRows = (numberOfRows) => {
        const rows = [];
        for (let i = 1; i < numberOfRows + 1; i += 1) {
            rows.push({
                id: i,
                first: ['Maria', 'Bobby  ', 'Alexander'][Math.floor((Math.random() * 3))],
                last: ['Morisson', 'Brown  ', 'Medinberg'][Math.floor((Math.random() * 3))],
                user: ['@dragon', '@hamster', '@cat'][Math.floor((Math.random() * 3))],
                age: Math.min(100, Math.round(Math.random() * 30) + 20),
                date: this.getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
                location: ['Melbourne', 'Tokio', 'Moscow', 'Rome'][Math.floor((Math.random() * 4))],
                work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))],
            });
        }
        return rows;
    };
    
    filterRows = (originalRows, pageNumber, rowsOnPage) => {
        const rowsFrom = rowsOnPage * (pageNumber - 1);
        const rowsTo = rowsFrom + rowsOnPage;
        return originalRows.slice(rowsFrom, rowsTo);
    };
    
    render() {
        return (
            <Col md={12} lg={12}>
                <Card>
                    <CardBody>
                        <div className="card__title">
                            <h5 className="bold-text">data table</h5>
                            <h5 className="subhead">Use table with column's option <span
                                className="red-text">sortable</span></h5>
                        </div>
                        <DataPaginationTable
                            heads={this.heads}
                            rows={this.state.rowsToShow}
                        />
                        <Pagination
                            itemsCount={this.state.rows.length}
                            itemsToShow={this.state.itemsToShow}
                            pageOfItems={this.state.pageOfItems}
                            onChangePage={this.onChangePage}
                        />
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

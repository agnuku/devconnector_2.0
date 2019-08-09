import React from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  CSVExport,
  Search
} from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
//import "./Table.css";
const { ExportCSVButton } = CSVExport;

const { SearchBar } = Search;
// const CaptionElement = () => (
//   <h4
//     style={{
//       borderRadius: "0.20em",
//       textAlign: "center",
//       color: "#032f3e",
//       border: "1px solid purple",
//       padding: "0.1em"
//     }}
//   >
//     Inventory
//   </h4>
// );

//    csvFormatter: (cell, row, rowIndex) => `$ ${cell}NTD`

// fetching data from Server

class AmzSalesReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          dataField: "id",
          text: "User#",
          sort: true
        },
        {
          dataField: "title",
          text: "Title",
          sort: true,
          filter: textFilter()
        },
        {
          dataField: "body",
          text: "Post",
          sort: true
        }
      ]
    };
  }

  render() {
    return (
      <div
        style={{
          marginTop: 30,
          height: "100vh",
          borderRadius: "0.20em",
          //textAlign: "center",
          color: "#032f3e",
          //border: "1px solid #bdbbb9",
          padding: "3em",
          margin: "10px"
        }}
      >
        <ToolkitProvider
          keyField="id"
          data={this.props.products}
          columns={this.state.columns}
          exportCSV={{
            fileName: "sellgraph_inv.csv"
            //separator: "|",
            //ignoreHeader: true,
            //noAutoBOM: false
          }}
          search
        >
          {props => (
            <React.Fragment>
              <div className="pull-right">
                <ExportCSVButton
                  {...props.csvProps}
                  className="btn btn-success"
                >
                  Export as CSV
                </ExportCSVButton>
                {/* <h3>Try to Search Bob, Cat or Allen instead of 0, 1 or 2</h3> */}
                <SearchBar {...props.searchProps} />
              </div>
              {/* <hr /> */}
              {/* <CaptionElement /> */}
              <BootstrapTable
                striped
                hover
                condensed
                trClassName="customClass"
                filter={filterFactory()}
                pagination={paginationFactory()}
                {...props.baseProps}
              />
            </React.Fragment>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}
export default AmzSalesReport;

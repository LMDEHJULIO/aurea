import styled from "styled-components";

export const ListPageStyle = styled.div`
  padding-top: 3rem;
  grid-template-columns: 3rem auto 3rem;

  header {
    grid-column: 2;
    margin-bottom: 2rem;
    text-align: center;
  }
  @media screen and (min-width: 768px){
    display: grid;
    grid-template-columns: 3rem auto 3rem;
    max-width: 1800px;
    margin: 0 auto;
  }

`

export const ListTable = styled.table`
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  grid-column: 2;

  table, thead, tbody, th, td, tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    margin: 0 0 1rem 0;
  }
    
  tr:nth-child(odd) {
    background: #ccc;
  }
  
  td {
    /* Row style*/
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
    overflow-wrap: break-word;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 0;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }

  .product-table-label:nth-of-type(1):before { content: "ID"; }
  .product-table-label:nth-of-type(2):before { content: "Product Name"; }
  .product-table-label:nth-of-type(3):before { content: "Price"; }
  .product-table-label:nth-of-type(4):before { content: "Category"; }
  .product-table-label:nth-of-type(5):before { content: "Brand"; }
  .product-table-label:nth-of-type(6):before { content: "Action"; }

  
  .news-table-label:nth-of-type(1):before { content: "ID"; }
  .news-table-label:nth-of-type(2):before { content: "Title"; }
  .news-table-label:nth-of-type(3):before { content: "Action"; }

  .order-table-label:nth-of-type(1):before { content: "ID"; }
  .order-table-label:nth-of-type(2):before { content: "User Name"; }
  .order-table-label:nth-of-type(3):before { content: "Date"; }
  .order-table-label:nth-of-type(4):before { content: "Price"; }
  .order-table-label:nth-of-type(5):before { content: "Paid For"; }
  .order-table-label:nth-of-type(6):before { content: "Delivered"; }
  .order-table-label:nth-of-type(7):before { content: "Action"; }

  
`
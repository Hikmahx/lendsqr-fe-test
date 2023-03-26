import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { fetchUsersDetails } from "../../redux/reducers/detailsSlice";
import { AppDispatch } from "../../redux/store";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

type Props = {
  currentItems: number[];
  itemsPerPage: number;
  event: React.SyntheticEvent | undefined;
  selected: number;
};

function Items({ currentItems }: Props) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }: Props) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(items.length / itemsPerPage);
  const pageCount = 16;

  // Invoke when user click to request another page.
  const handlePageClick = (event: Props) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items
        currentItems={currentItems}
        itemsPerPage={0}
        event={undefined}
        selected={0}
      /> */}
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        nextLabel={
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.993905 1.94274C0.152813 1.10165 1.45656 -0.159498 2.255 0.68165L7.00576 5.43241C7.38419 5.76873 7.38419 6.35718 7.00576 6.6935L2.38142 11.36C1.54033 12.159 0.279177 10.8973 1.12033 10.0568L5.1141 6.063L0.993905 1.94274Z"
              fill="#213F7D"
            />
          </svg>
        }
        previousLabel={
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00609 10.0573C7.84719 10.8984 6.54344 12.1595 5.745 11.3184L0.994244 6.56759C0.61581 6.23127 0.61581 5.64282 0.994244 5.3065L5.61858 0.640017C6.45967 -0.158963 7.72082 1.10267 6.87967 1.94322L2.8859 5.937L7.00609 10.0573Z"
              fill="#213F7D"
            />
          </svg>
        }
        containerClassName={"pagination"}
        disabledClassName={"pagination-link-disabled"}
        activeClassName={"pagination-link-active"}
        // renderOnZeroPageCount={null}
      />
    </>
  );
}

const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="pagination-wrapper">
      <div className="show-quantity">
        <span>Showing</span>
        <span className="select-quantity">
          <select
            onChange={(e) => {
              dispatch(fetchUsersDetails({ limit: `${e.target.value}` }));
            }}
            aria-label="quantity"
            className="quantity"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option selected value="100" className="">
              100
            </option>
          </select>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0573 0.993783C10.8984 0.152691 12.1595 1.45644 11.3184 2.25487L6.56759 7.00563C6.23127 7.38407 5.64282 7.38407 5.3065 7.00563L0.640017 2.38129C-0.158963 1.5402 1.10267 0.279055 1.94322 1.1202L5.937 5.11398L10.0573 0.993783Z"
              fill="#213F7D"
            />
          </svg>
        </span>
        <span>out of 100</span>
      </div>
      <nav className="pagination-nav">
        <PaginatedItems
          itemsPerPage={4}
          currentItems={[]}
          event={undefined}
          selected={0}
        />
      </nav>
    </div>
  );
};

export default Pagination;

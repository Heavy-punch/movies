import React from "react";
import "./Pagination.scss";
import { Button } from "reactstrap";

function Pagination(props) {
  const { count, page, onChange } = props;
  console.log(count);
  return (
    <div className=" p-3">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li
            className={page < 2 ? "page-item disabled" : "page-item"}
            onClick={() => page > 1 && onChange(page - 1)}
          >
            <a className="page-link" tabIndex="-1">
              Previous
            </a>
          </li>

          {[...Array(count).keys()].map((number, index) => {
            return (
              index >= page - 1 &&
              index <= page + 10 && (
                <li
                  className={
                    page === index + 1 ? "page-item active" : "page-item"
                  }
                  onClick={() => onChange(index + 1)}
                  key={index}
                >
                  <a className="page-link">{index + 1}</a>
                </li>
              )
            );
          })}
          <li
            className={page >= count ? "page-item disabled" : "page-item"}
            onClick={() => page < count && onChange(page + 1)}
          >
            <a className="page-link">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;

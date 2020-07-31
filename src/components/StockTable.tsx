import React from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import round from "lodash.round";
//@ts-ignore
import { Table, Thead, Tr, Td, Th } from "react-super-responsive-table";
import { formatDistanceToNow } from "date-fns";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import {
  UpdatedStockTuple,
  StockStatus,
} from "../interface/socket-data.interface";

interface IProps {
  data: UpdatedStockTuple[];
}
const tableHeadings = ["Stock", "Price", "Last updated at"];

const StockTable: React.FC<IProps> = ({ data }) => (
  <div className="table-container">
    <div className="sm:rounded-lg">
      <Table className="min-w-full divide-y divide-gray-200">
        <Thead>
          <Tr>
            {tableHeadings.map((heading) => (
              <Th
                key={heading}
                className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              >
                {heading}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Flipper
          flipKey={data}
          element="tbody"
          spring="veryGentle"
          className="bg-white divide-y divide-gray-200"
        >
          {data.map((stock: UpdatedStockTuple) => {
            return (
              <Flipped key={stock[0]} flipId={stock[0]}>
                <Tr
                  className={`${stock[3] === "up" ? "bg-green-200" : ""} ${
                    stock[3] === "down" ? "bg-red-200" : ""
                  }`}
                >
                  <Td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 uppercase">
                    {stock[0]}
                  </Td>
                  <Td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                    <span className="stock-price">{round(stock[1], 2)}</span>
                    {stock[3] === StockStatus.UP && (
                      <svg
                        className="table-row-icon"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="#22543d"
                      >
                        <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                      </svg>
                    )}
                    {stock[3] === StockStatus.DOWN && (
                      <svg
                        fill="none"
                        className="table-row-icon"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="#742a2a"
                      >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                      </svg>
                    )}
                  </Td>
                  <Td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                    {formatDistanceToNow(stock[2], { addSuffix: true })}
                  </Td>
                </Tr>
              </Flipped>
            );
          })}
        </Flipper>
      </Table>
    </div>
  </div>
);

export default StockTable;

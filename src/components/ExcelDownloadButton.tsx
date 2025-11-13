import React from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

interface ExcelDownloadButtonProps {
  tableData: any[][];
  sheetName: string;
  fileName: string;
}

const ExcelDownloadButton: React.FC<ExcelDownloadButtonProps> = ({ tableData, sheetName, fileName }) => {
  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, fileName);
  };

  return (
    <button
      onClick={handleExcelDownload}
      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center transition-colors duration-200"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H5a2 2 0 01-2-2V5a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2z"></path>
      </svg>
      엑셀 다운로드
    </button>
  );
};

export default ExcelDownloadButton;

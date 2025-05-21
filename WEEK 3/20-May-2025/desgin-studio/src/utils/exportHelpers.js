export const exportHelpers = {
    saveAsJson(canvas) {
      return JSON.stringify(canvas.toJSON());
    },
    
    exportAsPNG(canvas) {
      const link = document.createElement('a');
      link.download = 'design.png';
      link.href = canvas.toDataURL({
        format: 'png',
        quality: 1
      });
      link.click();
    },
    
    exportAsPDF(canvas) {
      // Note: For a real implementation, you might want to use a library like jsPDF
      alert('PDF export would typically use jsPDF library in a real implementation');
      // Example:
      // const imgData = canvas.toDataURL('image/jpeg', 1.0);
      // const pdf = new jsPDF('landscape');
      // pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210); // A4 dimensions in mm
      // pdf.save('design.pdf');
    },
    
    printCanvas(canvas) {
      const dataUrl = canvas.toDataURL({
        format: 'png',
        quality: 1
      });
      
      const windowContent = '<!DOCTYPE html>';
      const printWindow = window.open('', '', 'width=800,height=600');
      printWindow.document.open();
      printWindow.document.write(`
        ${windowContent}
        <html>
          <head>
            <title>Print Design</title>
          </head>
          <body>
            <img src="${dataUrl}" style="max-width:100%;" onload="window.print();window.close()" />
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };
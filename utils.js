module.exports = {
	multiplyByMatrices: function(matrix1, matrix2) {
        if(matrix1[0].length!=matrix2.length)
            return null;
        else {
            let matrix = [[0, 0]
                         [0, 0]];
            matrix[0][0] = (matrix1[0][0] * matrix2[0][0]) + (matrix1[0][1]*matrix2[1][0]);
            matrix[0][1] = (matrix1[0][0] * matrix2[0][1]) + (matrix1[0][1]*matrix2[1][1]);
            matrix[1][0] = (matrix1[1][0] * matrix2[0][0]) + (matrix1[1][1]*matrix2[1][0]);
            matrix[1][1] = (matrix1[1][0] * matrix2[0][1]) + (matrix1[1][1]*matrix2[1][1]);
            }
        printMatrices(matrix);
    },
    printMatrices: function(matrix){
        console.log("[[" + matrix[0][0] + ", " + matrix[0][1] + "]\n" 
        + matrix[1][0] + ", " + matrix[1][1] + "]]");
    }
}
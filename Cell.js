class Cell {

	_cellCondition;
	_containsMine;
	_numberOfMinesAround;

	constructor(cellCondition = CellCondition.HIDDEN, containsMine = false, numberOfMinesAround = 0) {
		this._cellCondition = cellCondition;
		this._containsMine = containsMine;
		this._numberOfMinesAround = numberOfMinesAround;
	}

	incNumberOfMinesAround() {
		this._numberOfMinesAround++;
	}

	toString() {
		return this._cellCondition === CellCondition.HIDDEN ? "?" : this._containsMine ? "X" : this._numberOfMinesAround;
	}
}
import { BoardModel } from '*/models/board.model'

const createNew = async (data) => {
  try {
    const result = await BoardModel.createNew(data)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getFullBoard = async (boardId) => {
  try {
    const board = await BoardModel.getFullBoard(boardId)
    // sắp xếp card theo column
    board.columns.forEach(column => {
      column.cards = board.cards.filter(c => c.columnId.toString() === column._id.toString())
    })
    // sắp xếp column từ columnOrder, card=>cardOrder tại frond-end

    // remove card data => board
    delete board.cards

    return board
  } catch (error) {
    throw new Error(error)
  }
}

export const BoardSevice = { 
  createNew,
  getFullBoard
}
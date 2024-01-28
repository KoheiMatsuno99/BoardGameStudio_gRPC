import * as jspb from 'google-protobuf'



export class Piece extends jspb.Message {
  getOwner(): string;
  setOwner(value: string): Piece;

  getPieceType(): string;
  setPieceType(value: string): Piece;

  getPositionList(): Array<number>;
  setPositionList(value: Array<number>): Piece;
  clearPositionList(): Piece;
  addPosition(value: number, index?: number): Piece;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Piece.AsObject;
  static toObject(includeInstance: boolean, msg: Piece): Piece.AsObject;
  static serializeBinaryToWriter(message: Piece, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Piece;
  static deserializeBinaryFromReader(message: Piece, reader: jspb.BinaryReader): Piece;
}

export namespace Piece {
  export type AsObject = {
    owner: string,
    pieceType: string,
    positionList: Array<number>,
  }
}

export class Player extends jspb.Message {
  getPlayerUuid(): string;
  setPlayerUuid(value: string): Player;

  getName(): string;
  setName(value: string): Player;

  getPiecesMap(): jspb.Map<string, Piece>;
  clearPiecesMap(): Player;

  getPickedredpiecescount(): number;
  setPickedredpiecescount(value: number): Player;

  getPickedbluepiecescount(): number;
  setPickedbluepiecescount(value: number): Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
  static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Player;
  static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
  export type AsObject = {
    playerUuid: string,
    name: string,
    piecesMap: Array<[string, Piece.AsObject]>,
    pickedredpiecescount: number,
    pickedbluepiecescount: number,
  }
}

export class Block extends jspb.Message {
  getAddressList(): Array<number>;
  setAddressList(value: Array<number>): Block;
  clearAddressList(): Block;
  addAddress(value: number, index?: number): Block;

  getPiece(): Piece | undefined;
  setPiece(value?: Piece): Block;
  hasPiece(): boolean;
  clearPiece(): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    addressList: Array<number>,
    piece?: Piece.AsObject,
  }

  export enum PieceCase { 
    _PIECE_NOT_SET = 0,
    PIECE = 2,
  }
}

export class BlockRow extends jspb.Message {
  getBlocksList(): Array<Block>;
  setBlocksList(value: Array<Block>): BlockRow;
  clearBlocksList(): BlockRow;
  addBlocks(value?: Block, index?: number): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockRow.AsObject;
  static toObject(includeInstance: boolean, msg: BlockRow): BlockRow.AsObject;
  static serializeBinaryToWriter(message: BlockRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockRow;
  static deserializeBinaryFromReader(message: BlockRow, reader: jspb.BinaryReader): BlockRow;
}

export namespace BlockRow {
  export type AsObject = {
    blocksList: Array<Block.AsObject>,
  }
}

export class Table extends jspb.Message {
  getTableUuid(): string;
  setTableUuid(value: string): Table;

  getPlayersList(): Array<Player>;
  setPlayersList(value: Array<Player>): Table;
  clearPlayersList(): Table;
  addPlayers(value?: Player, index?: number): Player;

  getBoardList(): Array<BlockRow>;
  setBoardList(value: Array<BlockRow>): Table;
  clearBoardList(): Table;
  addBoard(value?: BlockRow, index?: number): BlockRow;

  getTurn(): number;
  setTurn(value: number): Table;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Table.AsObject;
  static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
  static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Table;
  static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
}

export namespace Table {
  export type AsObject = {
    tableUuid: string,
    playersList: Array<Player.AsObject>,
    boardList: Array<BlockRow.AsObject>,
    turn: number,
  }
}

export class StartRequest extends jspb.Message {
  getPlayer1Name(): string;
  setPlayer1Name(value: string): StartRequest;

  getPlayer2Name(): string;
  setPlayer2Name(value: string): StartRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartRequest): StartRequest.AsObject;
  static serializeBinaryToWriter(message: StartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartRequest;
  static deserializeBinaryFromReader(message: StartRequest, reader: jspb.BinaryReader): StartRequest;
}

export namespace StartRequest {
  export type AsObject = {
    player1Name: string,
    player2Name: string,
  }
}

export class StartResponse extends jspb.Message {
  getGameState(): Table | undefined;
  setGameState(value?: Table): StartResponse;
  hasGameState(): boolean;
  clearGameState(): StartResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartResponse): StartResponse.AsObject;
  static serializeBinaryToWriter(message: StartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartResponse;
  static deserializeBinaryFromReader(message: StartResponse, reader: jspb.BinaryReader): StartResponse;
}

export namespace StartResponse {
  export type AsObject = {
    gameState?: Table.AsObject,
  }
}

export class NotifyGamePreparationCompletedRequest extends jspb.Message {
  getTableUuid(): string;
  setTableUuid(value: string): NotifyGamePreparationCompletedRequest;

  getPlayersList(): Array<Player>;
  setPlayersList(value: Array<Player>): NotifyGamePreparationCompletedRequest;
  clearPlayersList(): NotifyGamePreparationCompletedRequest;
  addPlayers(value?: Player, index?: number): Player;

  getBoardList(): Array<BlockRow>;
  setBoardList(value: Array<BlockRow>): NotifyGamePreparationCompletedRequest;
  clearBoardList(): NotifyGamePreparationCompletedRequest;
  addBoard(value?: BlockRow, index?: number): BlockRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifyGamePreparationCompletedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotifyGamePreparationCompletedRequest): NotifyGamePreparationCompletedRequest.AsObject;
  static serializeBinaryToWriter(message: NotifyGamePreparationCompletedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifyGamePreparationCompletedRequest;
  static deserializeBinaryFromReader(message: NotifyGamePreparationCompletedRequest, reader: jspb.BinaryReader): NotifyGamePreparationCompletedRequest;
}

export namespace NotifyGamePreparationCompletedRequest {
  export type AsObject = {
    tableUuid: string,
    playersList: Array<Player.AsObject>,
    boardList: Array<BlockRow.AsObject>,
  }
}

export class NotifyGamePreparationCompletedResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotifyGamePreparationCompletedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotifyGamePreparationCompletedResponse): NotifyGamePreparationCompletedResponse.AsObject;
  static serializeBinaryToWriter(message: NotifyGamePreparationCompletedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotifyGamePreparationCompletedResponse;
  static deserializeBinaryFromReader(message: NotifyGamePreparationCompletedResponse, reader: jspb.BinaryReader): NotifyGamePreparationCompletedResponse;
}

export namespace NotifyGamePreparationCompletedResponse {
  export type AsObject = {
  }
}

export class GetGameStateRequest extends jspb.Message {
  getTableUuid(): string;
  setTableUuid(value: string): GetGameStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGameStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGameStateRequest): GetGameStateRequest.AsObject;
  static serializeBinaryToWriter(message: GetGameStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGameStateRequest;
  static deserializeBinaryFromReader(message: GetGameStateRequest, reader: jspb.BinaryReader): GetGameStateRequest;
}

export namespace GetGameStateRequest {
  export type AsObject = {
    tableUuid: string,
  }
}

export class GetGameStateResponse extends jspb.Message {
  getGameState(): Table | undefined;
  setGameState(value?: Table): GetGameStateResponse;
  hasGameState(): boolean;
  clearGameState(): GetGameStateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGameStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGameStateResponse): GetGameStateResponse.AsObject;
  static serializeBinaryToWriter(message: GetGameStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGameStateResponse;
  static deserializeBinaryFromReader(message: GetGameStateResponse, reader: jspb.BinaryReader): GetGameStateResponse;
}

export namespace GetGameStateResponse {
  export type AsObject = {
    gameState?: Table.AsObject,
  }
}

export class UpdateGameStateByPlayerMovementRequest extends jspb.Message {
  getTableUuid(): string;
  setTableUuid(value: string): UpdateGameStateByPlayerMovementRequest;

  getPieceKey(): string;
  setPieceKey(value: string): UpdateGameStateByPlayerMovementRequest;

  getDest(): Block | undefined;
  setDest(value?: Block): UpdateGameStateByPlayerMovementRequest;
  hasDest(): boolean;
  clearDest(): UpdateGameStateByPlayerMovementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGameStateByPlayerMovementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGameStateByPlayerMovementRequest): UpdateGameStateByPlayerMovementRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateGameStateByPlayerMovementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGameStateByPlayerMovementRequest;
  static deserializeBinaryFromReader(message: UpdateGameStateByPlayerMovementRequest, reader: jspb.BinaryReader): UpdateGameStateByPlayerMovementRequest;
}

export namespace UpdateGameStateByPlayerMovementRequest {
  export type AsObject = {
    tableUuid: string,
    pieceKey: string,
    dest?: Block.AsObject,
  }
}

export class UpdateGameStateByPlayerMovementResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGameStateByPlayerMovementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGameStateByPlayerMovementResponse): UpdateGameStateByPlayerMovementResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateGameStateByPlayerMovementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGameStateByPlayerMovementResponse;
  static deserializeBinaryFromReader(message: UpdateGameStateByPlayerMovementResponse, reader: jspb.BinaryReader): UpdateGameStateByPlayerMovementResponse;
}

export namespace UpdateGameStateByPlayerMovementResponse {
  export type AsObject = {
  }
}

export class UpdateGameStateByCpuMovementRequest extends jspb.Message {
  getTableUuid(): string;
  setTableUuid(value: string): UpdateGameStateByCpuMovementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGameStateByCpuMovementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGameStateByCpuMovementRequest): UpdateGameStateByCpuMovementRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateGameStateByCpuMovementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGameStateByCpuMovementRequest;
  static deserializeBinaryFromReader(message: UpdateGameStateByCpuMovementRequest, reader: jspb.BinaryReader): UpdateGameStateByCpuMovementRequest;
}

export namespace UpdateGameStateByCpuMovementRequest {
  export type AsObject = {
    tableUuid: string,
  }
}

export class UpdateGameStateByCpuMovementResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGameStateByCpuMovementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGameStateByCpuMovementResponse): UpdateGameStateByCpuMovementResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateGameStateByCpuMovementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGameStateByCpuMovementResponse;
  static deserializeBinaryFromReader(message: UpdateGameStateByCpuMovementResponse, reader: jspb.BinaryReader): UpdateGameStateByCpuMovementResponse;
}

export namespace UpdateGameStateByCpuMovementResponse {
  export type AsObject = {
  }
}

export class DeleteGameStateWhenGameIsOverRequest extends jspb.Message {
  getTableUuid(): string;
  setTableUuid(value: string): DeleteGameStateWhenGameIsOverRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGameStateWhenGameIsOverRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGameStateWhenGameIsOverRequest): DeleteGameStateWhenGameIsOverRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteGameStateWhenGameIsOverRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGameStateWhenGameIsOverRequest;
  static deserializeBinaryFromReader(message: DeleteGameStateWhenGameIsOverRequest, reader: jspb.BinaryReader): DeleteGameStateWhenGameIsOverRequest;
}

export namespace DeleteGameStateWhenGameIsOverRequest {
  export type AsObject = {
    tableUuid: string,
  }
}

export class DeleteGameStateWhenGameIsOverResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGameStateWhenGameIsOverResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGameStateWhenGameIsOverResponse): DeleteGameStateWhenGameIsOverResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteGameStateWhenGameIsOverResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGameStateWhenGameIsOverResponse;
  static deserializeBinaryFromReader(message: DeleteGameStateWhenGameIsOverResponse, reader: jspb.BinaryReader): DeleteGameStateWhenGameIsOverResponse;
}

export namespace DeleteGameStateWhenGameIsOverResponse {
  export type AsObject = {
  }
}


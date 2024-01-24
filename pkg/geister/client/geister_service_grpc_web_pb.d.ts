import * as grpcWeb from 'grpc-web';

import * as geister_service_pb from './geister_service_pb'; // proto import: "geister_service.proto"


export class GeisterServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  start(
    request: geister_service_pb.StartRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: geister_service_pb.StartResponse) => void
  ): grpcWeb.ClientReadableStream<geister_service_pb.StartResponse>;

  getGameState(
    request: geister_service_pb.GetGameStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: geister_service_pb.GetGameStateResponse) => void
  ): grpcWeb.ClientReadableStream<geister_service_pb.GetGameStateResponse>;

  updateGameStateByPlayerMove(
    request: geister_service_pb.UpdateGameStateByPlayerMoveRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: geister_service_pb.UpdateGameStateByPlayerMoveResponse) => void
  ): grpcWeb.ClientReadableStream<geister_service_pb.UpdateGameStateByPlayerMoveResponse>;

  updateGameStateByCpuMove(
    request: geister_service_pb.UpdateGameStateByCpuMoveRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: geister_service_pb.UpdateGameStateByCpuMoveResponse) => void
  ): grpcWeb.ClientReadableStream<geister_service_pb.UpdateGameStateByCpuMoveResponse>;

  deleteGameStateWhenGameIsOver(
    request: geister_service_pb.DeleteGameStateWhenGameIsOverRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: geister_service_pb.DeleteGameStateWhenGameIsOverResponse) => void
  ): grpcWeb.ClientReadableStream<geister_service_pb.DeleteGameStateWhenGameIsOverResponse>;

}

export class GeisterServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  start(
    request: geister_service_pb.StartRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<geister_service_pb.StartResponse>;

  getGameState(
    request: geister_service_pb.GetGameStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<geister_service_pb.GetGameStateResponse>;

  updateGameStateByPlayerMove(
    request: geister_service_pb.UpdateGameStateByPlayerMoveRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<geister_service_pb.UpdateGameStateByPlayerMoveResponse>;

  updateGameStateByCpuMove(
    request: geister_service_pb.UpdateGameStateByCpuMoveRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<geister_service_pb.UpdateGameStateByCpuMoveResponse>;

  deleteGameStateWhenGameIsOver(
    request: geister_service_pb.DeleteGameStateWhenGameIsOverRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<geister_service_pb.DeleteGameStateWhenGameIsOverResponse>;

}


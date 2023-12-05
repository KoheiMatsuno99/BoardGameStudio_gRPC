import * as grpcWeb from 'grpc-web';

import * as proto_geister_service_pb from '../proto/geister_service_pb'; // proto import: "proto/geister_service.proto"


export class GeisterServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  start(
    request: proto_geister_service_pb.StartRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_geister_service_pb.StartResponse) => void
  ): grpcWeb.ClientReadableStream<proto_geister_service_pb.StartResponse>;

  getGameState(
    request: proto_geister_service_pb.GetGameStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_geister_service_pb.GetGameStateResponse) => void
  ): grpcWeb.ClientReadableStream<proto_geister_service_pb.GetGameStateResponse>;

  updateGameStateByPlayerMove(
    request: proto_geister_service_pb.UpdateGameStateByPlayerMoveRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_geister_service_pb.UpdateGameStateByPlayerMoveResponse) => void
  ): grpcWeb.ClientReadableStream<proto_geister_service_pb.UpdateGameStateByPlayerMoveResponse>;

  updateGameStateByCpuMove(
    request: proto_geister_service_pb.UpdateGameStateByCpuMoveRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_geister_service_pb.UpdateGameStateByCpuMoveResponse) => void
  ): grpcWeb.ClientReadableStream<proto_geister_service_pb.UpdateGameStateByCpuMoveResponse>;

  deleteGameStateWhenGameIsOver(
    request: proto_geister_service_pb.DeleteGameStateWhenGameIsOverRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: proto_geister_service_pb.DeleteGameStateWhenGameIsOverResponse) => void
  ): grpcWeb.ClientReadableStream<proto_geister_service_pb.DeleteGameStateWhenGameIsOverResponse>;

}

export class GeisterServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  start(
    request: proto_geister_service_pb.StartRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_geister_service_pb.StartResponse>;

  getGameState(
    request: proto_geister_service_pb.GetGameStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_geister_service_pb.GetGameStateResponse>;

  updateGameStateByPlayerMove(
    request: proto_geister_service_pb.UpdateGameStateByPlayerMoveRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_geister_service_pb.UpdateGameStateByPlayerMoveResponse>;

  updateGameStateByCpuMove(
    request: proto_geister_service_pb.UpdateGameStateByCpuMoveRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_geister_service_pb.UpdateGameStateByCpuMoveResponse>;

  deleteGameStateWhenGameIsOver(
    request: proto_geister_service_pb.DeleteGameStateWhenGameIsOverRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<proto_geister_service_pb.DeleteGameStateWhenGameIsOverResponse>;

}


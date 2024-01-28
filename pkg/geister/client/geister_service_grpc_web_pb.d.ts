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

  notifyGamePreparationCompleted(
    request: geister_service_pb.NotifyGamePreparationCompletedRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: geister_service_pb.NotifyGamePreparationCompletedResponse) => void
  ): grpcWeb.ClientReadableStream<geister_service_pb.NotifyGamePreparationCompletedResponse>;

  getGameState(
    request: geister_service_pb.GetGameStateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: geister_service_pb.GetGameStateResponse) => void
  ): grpcWeb.ClientReadableStream<geister_service_pb.GetGameStateResponse>;

  updateGameStateByPlayerMove(
    request: geister_service_pb.UpdateGameStateByPlayerMovementRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: geister_service_pb.UpdateGameStateByPlayerMovementResponse) => void
  ): grpcWeb.ClientReadableStream<geister_service_pb.UpdateGameStateByPlayerMovementResponse>;

  updateGameStateByCpuMove(
    request: geister_service_pb.UpdateGameStateByCpuMovementRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: geister_service_pb.UpdateGameStateByCpuMovementResponse) => void
  ): grpcWeb.ClientReadableStream<geister_service_pb.UpdateGameStateByCpuMovementResponse>;

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

  notifyGamePreparationCompleted(
    request: geister_service_pb.NotifyGamePreparationCompletedRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<geister_service_pb.NotifyGamePreparationCompletedResponse>;

  getGameState(
    request: geister_service_pb.GetGameStateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<geister_service_pb.GetGameStateResponse>;

  updateGameStateByPlayerMove(
    request: geister_service_pb.UpdateGameStateByPlayerMovementRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<geister_service_pb.UpdateGameStateByPlayerMovementResponse>;

  updateGameStateByCpuMove(
    request: geister_service_pb.UpdateGameStateByCpuMovementRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<geister_service_pb.UpdateGameStateByCpuMovementResponse>;

  deleteGameStateWhenGameIsOver(
    request: geister_service_pb.DeleteGameStateWhenGameIsOverRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<geister_service_pb.DeleteGameStateWhenGameIsOverResponse>;

}


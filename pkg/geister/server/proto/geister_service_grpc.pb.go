// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v4.25.1
// source: proto/geister_service.proto

package proto

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// GeisterServiceClient is the client API for GeisterService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GeisterServiceClient interface {
	Start(ctx context.Context, in *StartRequest, opts ...grpc.CallOption) (*StartResponse, error)
	GetGameState(ctx context.Context, in *GetGameStateRequest, opts ...grpc.CallOption) (*GetGameStateResponse, error)
	UpdateGameStateByPlayerMove(ctx context.Context, in *UpdateGameStateByPlayerMoveRequest, opts ...grpc.CallOption) (*UpdateGameStateByPlayerMoveResponse, error)
	UpdateGameStateByCpuMove(ctx context.Context, in *UpdateGameStateByCpuMoveRequest, opts ...grpc.CallOption) (*UpdateGameStateByCpuMoveResponse, error)
	DeleteGameStateWhenGameIsOver(ctx context.Context, in *DeleteGameStateWhenGameIsOverRequest, opts ...grpc.CallOption) (*DeleteGameStateWhenGameIsOverResponse, error)
}

type geisterServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewGeisterServiceClient(cc grpc.ClientConnInterface) GeisterServiceClient {
	return &geisterServiceClient{cc}
}

func (c *geisterServiceClient) Start(ctx context.Context, in *StartRequest, opts ...grpc.CallOption) (*StartResponse, error) {
	out := new(StartResponse)
	err := c.cc.Invoke(ctx, "/GeisterService/Start", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *geisterServiceClient) GetGameState(ctx context.Context, in *GetGameStateRequest, opts ...grpc.CallOption) (*GetGameStateResponse, error) {
	out := new(GetGameStateResponse)
	err := c.cc.Invoke(ctx, "/GeisterService/GetGameState", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *geisterServiceClient) UpdateGameStateByPlayerMove(ctx context.Context, in *UpdateGameStateByPlayerMoveRequest, opts ...grpc.CallOption) (*UpdateGameStateByPlayerMoveResponse, error) {
	out := new(UpdateGameStateByPlayerMoveResponse)
	err := c.cc.Invoke(ctx, "/GeisterService/UpdateGameStateByPlayerMove", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *geisterServiceClient) UpdateGameStateByCpuMove(ctx context.Context, in *UpdateGameStateByCpuMoveRequest, opts ...grpc.CallOption) (*UpdateGameStateByCpuMoveResponse, error) {
	out := new(UpdateGameStateByCpuMoveResponse)
	err := c.cc.Invoke(ctx, "/GeisterService/UpdateGameStateByCpuMove", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *geisterServiceClient) DeleteGameStateWhenGameIsOver(ctx context.Context, in *DeleteGameStateWhenGameIsOverRequest, opts ...grpc.CallOption) (*DeleteGameStateWhenGameIsOverResponse, error) {
	out := new(DeleteGameStateWhenGameIsOverResponse)
	err := c.cc.Invoke(ctx, "/GeisterService/DeleteGameStateWhenGameIsOver", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GeisterServiceServer is the server API for GeisterService service.
// All implementations must embed UnimplementedGeisterServiceServer
// for forward compatibility
type GeisterServiceServer interface {
	Start(context.Context, *StartRequest) (*StartResponse, error)
	GetGameState(context.Context, *GetGameStateRequest) (*GetGameStateResponse, error)
	UpdateGameStateByPlayerMove(context.Context, *UpdateGameStateByPlayerMoveRequest) (*UpdateGameStateByPlayerMoveResponse, error)
	UpdateGameStateByCpuMove(context.Context, *UpdateGameStateByCpuMoveRequest) (*UpdateGameStateByCpuMoveResponse, error)
	DeleteGameStateWhenGameIsOver(context.Context, *DeleteGameStateWhenGameIsOverRequest) (*DeleteGameStateWhenGameIsOverResponse, error)
	mustEmbedUnimplementedGeisterServiceServer()
}

// UnimplementedGeisterServiceServer must be embedded to have forward compatible implementations.
type UnimplementedGeisterServiceServer struct {
}

func (UnimplementedGeisterServiceServer) Start(context.Context, *StartRequest) (*StartResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Start not implemented")
}
func (UnimplementedGeisterServiceServer) GetGameState(context.Context, *GetGameStateRequest) (*GetGameStateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetGameState not implemented")
}
func (UnimplementedGeisterServiceServer) UpdateGameStateByPlayerMove(context.Context, *UpdateGameStateByPlayerMoveRequest) (*UpdateGameStateByPlayerMoveResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateGameStateByPlayerMove not implemented")
}
func (UnimplementedGeisterServiceServer) UpdateGameStateByCpuMove(context.Context, *UpdateGameStateByCpuMoveRequest) (*UpdateGameStateByCpuMoveResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateGameStateByCpuMove not implemented")
}
func (UnimplementedGeisterServiceServer) DeleteGameStateWhenGameIsOver(context.Context, *DeleteGameStateWhenGameIsOverRequest) (*DeleteGameStateWhenGameIsOverResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteGameStateWhenGameIsOver not implemented")
}
func (UnimplementedGeisterServiceServer) mustEmbedUnimplementedGeisterServiceServer() {}

// UnsafeGeisterServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GeisterServiceServer will
// result in compilation errors.
type UnsafeGeisterServiceServer interface {
	mustEmbedUnimplementedGeisterServiceServer()
}

func RegisterGeisterServiceServer(s grpc.ServiceRegistrar, srv GeisterServiceServer) {
	s.RegisterService(&GeisterService_ServiceDesc, srv)
}

func _GeisterService_Start_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StartRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeisterServiceServer).Start(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/GeisterService/Start",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeisterServiceServer).Start(ctx, req.(*StartRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GeisterService_GetGameState_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetGameStateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeisterServiceServer).GetGameState(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/GeisterService/GetGameState",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeisterServiceServer).GetGameState(ctx, req.(*GetGameStateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GeisterService_UpdateGameStateByPlayerMove_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateGameStateByPlayerMoveRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeisterServiceServer).UpdateGameStateByPlayerMove(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/GeisterService/UpdateGameStateByPlayerMove",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeisterServiceServer).UpdateGameStateByPlayerMove(ctx, req.(*UpdateGameStateByPlayerMoveRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GeisterService_UpdateGameStateByCpuMove_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateGameStateByCpuMoveRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeisterServiceServer).UpdateGameStateByCpuMove(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/GeisterService/UpdateGameStateByCpuMove",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeisterServiceServer).UpdateGameStateByCpuMove(ctx, req.(*UpdateGameStateByCpuMoveRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GeisterService_DeleteGameStateWhenGameIsOver_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteGameStateWhenGameIsOverRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeisterServiceServer).DeleteGameStateWhenGameIsOver(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/GeisterService/DeleteGameStateWhenGameIsOver",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeisterServiceServer).DeleteGameStateWhenGameIsOver(ctx, req.(*DeleteGameStateWhenGameIsOverRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// GeisterService_ServiceDesc is the grpc.ServiceDesc for GeisterService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var GeisterService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "GeisterService",
	HandlerType: (*GeisterServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Start",
			Handler:    _GeisterService_Start_Handler,
		},
		{
			MethodName: "GetGameState",
			Handler:    _GeisterService_GetGameState_Handler,
		},
		{
			MethodName: "UpdateGameStateByPlayerMove",
			Handler:    _GeisterService_UpdateGameStateByPlayerMove_Handler,
		},
		{
			MethodName: "UpdateGameStateByCpuMove",
			Handler:    _GeisterService_UpdateGameStateByCpuMove_Handler,
		},
		{
			MethodName: "DeleteGameStateWhenGameIsOver",
			Handler:    _GeisterService_DeleteGameStateWhenGameIsOver_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/geister_service.proto",
}

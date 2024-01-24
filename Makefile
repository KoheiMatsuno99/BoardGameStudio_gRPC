tidy:
	go mod tidy

inspect:
	golangci-lint run ./...

protoc:
	protoc --go_out=pkg/geister/server --go_opt=paths=source_relative \
		--go-grpc_out=pkg/geister/server --go-grpc_opt=paths=source_relative \
		--js_out=import_style=commonjs:pkg/geister/client \
		--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:pkg/geister/client \
		*.proto
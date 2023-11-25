tidy:
	go mod tidy

inspect:
	golangci-lint run ./...

protoc:
	protoc --go_out=pkg/geister --go_opt=paths=source_relative \
		--go-grpc_out=pkg/geister --go-grpc_opt=paths=source_relative \
		proto/*.proto
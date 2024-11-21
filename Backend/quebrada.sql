CREATE TABLE `usuarios` (
	`id_usuario` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`nome_completo` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL,
	`senha_hash` VARCHAR(255) NOT NULL,
	`criado_em` DATETIME DEFAULT CURRENT_TIMESTAMP,
	`atualizado_em` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`cpf_usuario` CHAR(11),  -- CPF tem 11 dígitos, então usa-se CHAR(11)
	`telefone_usuario` VARCHAR(20),  -- Telefones podem ter diferentes formatos
	PRIMARY KEY(`id_usuario`),
	UNIQUE(`email`)  -- Garantir que o email seja único
);

CREATE TABLE `produtos` (
	`id_produto` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`nome_produto` VARCHAR(255) NOT NULL,
	`preco_produto` DECIMAL(10, 2) NOT NULL,  -- Especifica a precisão do preço (2 casas decimais)
	`imagem_url` VARCHAR(255) NOT NULL,
	`criado_em` DATETIME DEFAULT CURRENT_TIMESTAMP,
	`atualizado_em` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY(`id_produto`)
);

CREATE TABLE `carrinho` (
	`id_carrinho` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`id_usuario` INTEGER NOT NULL,
	`id_produto` INTEGER NOT NULL,
	`quantidade` INTEGER NOT NULL,
	`preco` DECIMAL(10, 2) NOT NULL,  -- Preço também deve ter precisão
	`adicionado_em` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(`id_carrinho`),
	FOREIGN KEY(`id_usuario`) REFERENCES `usuarios`(`id_usuario`)
		ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY(`id_produto`) REFERENCES `produtos`(`id_produto`)
		ON UPDATE CASCADE ON DELETE CASCADE
);

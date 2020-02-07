import { GraphQLSchema } from 'graphql';
interface Options {
    commentDescriptions?: boolean;
}
export declare function sdlArray(schema: GraphQLSchema, options?: Options): ({
    instanceOf: string;
    fields: any[];
    interfaces: any[];
    args: any[];
    implementations: any[];
    name: string;
    description: string;
    astNode?: import("graphql/language/ast").ScalarTypeDefinitionNode | undefined;
} | {
    instanceOf: string;
    fields: any[];
    interfaces: any[];
    args: any[];
    implementations: any[];
    name: string;
    description: string;
    astNode?: import("graphql/language/ast").ObjectTypeDefinitionNode | undefined;
    extensionASTNodes: import("graphql/language/ast").TypeExtensionNode[];
    isTypeOf: import("graphql/type/definition").GraphQLIsTypeOfFn<any, any>;
} | {
    instanceOf: string;
    fields: any[];
    interfaces: any[];
    args: any[];
    implementations: any[];
    name: string;
    description: string;
    astNode?: import("graphql/language/ast").InterfaceTypeDefinitionNode | undefined;
    resolveType: import("graphql/type/definition").GraphQLTypeResolver<any, any>;
} | {
    instanceOf: string;
    fields: any[];
    interfaces: any[];
    args: any[];
    implementations: any[];
    name: string;
    description: string;
    astNode?: import("graphql/language/ast").UnionTypeDefinitionNode | undefined;
    resolveType: import("graphql/type/definition").GraphQLTypeResolver<any, any>;
} | {
    instanceOf: string;
    fields: any[];
    interfaces: any[];
    args: any[];
    implementations: any[];
    name: string;
    description: string;
    astNode?: import("graphql/language/ast").EnumTypeDefinitionNode | undefined;
} | {
    instanceOf: string;
    fields: any[];
    interfaces: any[];
    args: any[];
    implementations: any[];
    name: string;
    description: string;
    astNode?: import("graphql/language/ast").InputObjectTypeDefinitionNode | undefined;
})[];
export declare function getSDL(schema: GraphQLSchema | null | undefined, commentsDisabled?: boolean): string;
export declare function downloadSchema(schema: GraphQLSchema, type: string): void;
export {};

import { GraphQLConfig, GraphQLConfigEnpointConfig } from '../graphqlConfig';
import { GraphQLSchema } from 'graphql';
export declare function getActiveEndpoints(config: GraphQLConfig, envName: string, projectName?: string): {
    endpoint: string;
    subscriptionEndpoint?: string;
    headers?: any;
};
export declare function getEndpointFromEndpointConfig(env: GraphQLConfigEnpointConfig | string): {
    endpoint: string;
    subscriptionEndpoint: undefined;
    headers?: undefined;
} | {
    endpoint: string;
    subscriptionEndpoint: string | undefined;
    headers: {
        [name: string]: string;
    } | undefined;
};
/**
 * A cached version of `printSchema`
 * @param schema GraphQLSchema instance
 */
export declare function cachedPrintSchema(schema: GraphQLSchema): string;

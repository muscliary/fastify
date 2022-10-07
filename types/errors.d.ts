import { FastifyErrorConstructor } from '@fastify/error'

export type FastifyErrorCodes = Record<
'FST_ERR_NOT_FOUND' |
'FST_ERR_CTP_ALREADY_PRESENT' |
'FST_ERR_CTP_INVALID_TYPE' |
'FST_ERR_CTP_EMPTY_TYPE' |
'FST_ERR_CTP_INVALID_HANDLER' |
'FST_ERR_CTP_INVALID_PARSE_TYPE' |
'FST_ERR_CTP_BODY_TOO_LARGE' |
'FST_ERR_CTP_INVALID_MEDIA_TYPE' |
'FST_ERR_CTP_INVALID_CONTENT_LENGTH' |
'FST_ERR_CTP_EMPTY_JSON_BODY' |
'FST_ERR_DEC_ALREADY_PRESENT' |
'FST_ERR_DEC_DEPENDENCY_INVALID_TYPE' |
'FST_ERR_DEC_MISSING_DEPENDENCY' |
'FST_ERR_DEC_AFTER_START' |
'FST_ERR_HOOK_INVALID_TYPE' |
'FST_ERR_HOOK_INVALID_HANDLER' |
'FST_ERR_MISSING_MIDDLEWARE' |
'FST_ERR_HOOK_TIMEOUT' |
'FST_ERR_LOG_INVALID_DESTINATION' |
'FST_ERR_REP_INVALID_PAYLOAD_TYPE' |
'FST_ERR_REP_ALREADY_SENT' |
'FST_ERR_REP_SENT_VALUE'|
'FST_ERR_SEND_INSIDE_ONERR'|
'FST_ERR_SEND_UNDEFINED_ERR'|
'FST_ERR_BAD_STATUS_CODE'|
'FST_ERR_BAD_TRAILER_NAME' |
'FST_ERR_BAD_TRAILER_VALUE' |
'FST_ERR_MISSING_SERIALIZATION_FN' |
'FST_ERR_REQ_INVALID_VALIDATION_INVOCATION' |
'FST_ERR_SCH_MISSING_ID' |
'FST_ERR_SCH_ALREADY_PRESENT' |
'FST_ERR_SCH_DUPLICATE' |
'FST_ERR_SCH_VALIDATION_BUILD' |
'FST_ERR_SCH_SERIALIZATION_BUILD' |
'FST_ERR_HTTP2_INVALID_VERSION' |
'FST_ERR_INIT_OPTS_INVALID' |
'FST_ERR_FORCE_CLOSE_CONNECTIONS_IDLE_NOT_AVAILABLE' |
'FST_ERR_DUPLICATED_ROUTE' |
'FST_ERR_BAD_URL' |
'FST_ERR_DEFAULT_ROUTE_INVALID_TYPE' |
'FST_ERR_INVALID_URL' |
'FST_ERR_REOPENED_CLOSE_SERVER' |
'FST_ERR_REOPENED_SERVER' |
'FST_ERR_PLUGIN_VERSION_MISMATCH' |
'FST_ERR_PLUGIN_CALLBACK_NOT_FN' |
'FST_ERR_PLUGIN_NOT_VALID' |
'FST_ERR_ROOT_PLG_BOOTED' |
'FST_ERR_PARENT_PLUGIN_BOOTED' |
'FST_ERR_PLUGIN_TIMEOUT'
, FastifyErrorConstructor>

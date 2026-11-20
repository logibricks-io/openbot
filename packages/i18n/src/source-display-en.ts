import type { PartialTranslation } from "./message";
import { source } from "./messages/en/source";

/**
 * English display text for reviewed product messages. The source catalog stays unchanged for
 * senders, matching and stored errors. These templates render only after a source key is known;
 * no replacement runs on provider text, user text or captured placeholder values.
 *
 * External app names, account services, vault folders and transfer provenance stay as written in
 * the source. A mixed message can name this app and the upstream service separately.
 */
export const englishSourceDisplayOverrides = {
  "error.agent.compactionLoopStopped":
    "{provider} compacted the context again and again, and each time it stayed too full to continue, so LogiBricks Workspace stopped this turn. Turn off the MCP servers or computer use that this agent does not need, then send a message. If you or the agent changed when {provider} compacts, undo that change.",
  "error.agent.copyNameFailed": "LogiBricks Workspace could not create a unique agent copy name.",
  "error.agent.deleteFolderInUse":
    "Work of another agent still uses this agent's folder. Delete this agent again when that work ends, or after you restart LogiBricks Workspace.",
  "error.agent.deleteWhenFolderFree":
    "Work of another agent still uses this agent's folder. LogiBricks Workspace deletes this agent when that work ends.",
  "error.agent.instructionsOutside":
    "The instructions file links to a place outside the agent's workspace, so LogiBricks Workspace does not open it.",
  "error.agent.mcpServerBuiltIn":
    "{name} is part of LogiBricks Workspace, so the MCP tools cannot test, turn on or off, or remove it. The user controls it on the computer that runs LogiBricks Workspace: the GitHub connection in Marketplace, Apps, GitHub, and Computer Use in Settings, Computer Use.",
  "error.agent.mcpServerHeadersNeedPerson":
    "Only the user of this LogiBricks Workspace, in a chat with you, can give the keys of the MCP server {name}. Ask the user to enter them in Marketplace, Apps, {name}.",
  "error.agent.oldRoleField":
    "Stored agent profiles use the old role field; update the data before starting LogiBricks Workspace.",
  "error.agent.screenCaptureListPermission":
    "LogiBricks Workspace does not have the Screen Recording permission yet, so it cannot list the windows. To capture a display, call capture_screen with target screen. The user approves the capture first, and then macOS can ask the user for the permission.",
  "error.agent.screenCapturePermissionMissing":
    "LogiBricks Workspace does not have the Screen Recording permission. Ask the user to open System Settings > Privacy & Security > Screen & System Audio Recording, turn on LogiBricks Workspace, then quit and open LogiBricks Workspace again.",
  "error.agent.stateCorrupt":
    "Agent state is corrupt or from a newer LogiBricks Workspace version; refusing to overwrite it.",
  "error.agent.toolDescribeUnknownNames":
    "tool_describe found no LogiBricks Workspace tool named {names}. It describes only the LogiBricks Workspace and browser tools that openbot.tool_search lists, not MCP tools.",
  "error.agent.toolLoopStopped":
    "{provider} repeated a failed step many times, so LogiBricks Workspace stopped this turn. Send the message again, or choose another model.",
  "error.agent.turnStalled":
    "{provider} stopped responding, so LogiBricks Workspace ended this turn. Send the message again, or choose another model.",
  "error.agent.workspaceOnlyToolMissing":
    "Workspace only needs {tool}, which LogiBricks Workspace did not find. Install it, or choose Full access in the agent settings.",
  "error.app.notReady": "LogiBricks Workspace is not ready.",
  "error.attachment.emlUnsupported":
    "This server does not support EML attachments. Update LogiBricks Workspace on the host and retry.",
  "error.attachment.mediaUnsupported":
    "This server does not support MP3 or MOV attachments. Update LogiBricks Workspace on the host and retry.",
  "error.attachment.mp4Unsupported":
    "This server does not support MP4 attachments. Update LogiBricks Workspace on the host and retry.",
  "error.attachment.svgUnsupported":
    "This server does not support SVG attachments. Update LogiBricks Workspace on the host and retry.",
  "error.attachment.zipUnsupported":
    "This server does not support ZIP attachments. Update LogiBricks Workspace on the host and retry.",
  "error.auth.codeNotSent": "LogiBricks Workspace could not send the sign-in code.",
  "error.auth.companySignInTokenInvalid": "The provider gave a sign-in that LogiBricks Workspace cannot check.",
  "error.auth.companySignInUnavailable": "This LogiBricks Workspace cannot open a browser for the company sign-in.",
  "error.auth.deliveryInterrupted":
    "The connection ended before LogiBricks Workspace confirmed delivery. Check delivery to avoid sending another code.",
  "error.auth.deliveryTimeout":
    "LogiBricks Workspace could not confirm delivery in time. The code may still arrive; check delivery before sending again.",
  "error.auth.deliveryUnknown":
    "LogiBricks Workspace could not confirm whether the sign-in code was sent. Check delivery before sending again.",
  "error.auth.networkBlocked":
    "A firewall or proxy on this network blocked LogiBricks Workspace from reaching {host}. Ask your network administrator to allow {host}, then try again.",
  "error.auth.serviceUnavailable":
    "LogiBricks Workspace could not reach the account service. Check that the API is running, then try again.",
  "error.auth.serviceUnreachable":
    "LogiBricks Workspace could not reach the account service. Check your connection, then try again.",
  "error.auth.sessionTimeout":
    "LogiBricks Workspace did not answer in time. Check your internet connection, then try again.",
  "error.auth.signInFirst": "Sign in to LogiBricks Workspace first.",
  "error.backend.apiKeyAnswerUnreadable":
    "LogiBricks Workspace could not read the API key. Enter a key of 8,000 characters or less, and select who can use it.",
  "error.backend.apiKeySaveFailed": "LogiBricks Workspace could not save the API key. Try again.",
  "error.backend.attachmentCopyFailed": "LogiBricks Workspace could not copy {name}.",
  "error.backend.browserSignInOpenFailed": "LogiBricks Workspace could not open the sign-in window.",
  "error.backend.browserSignInReadFailed": "LogiBricks Workspace could not read the sign-in from the window.",
  "error.backend.browserSystemProxyFailed":
    "The proxy in the settings of the computer that runs LogiBricks Workspace does not answer or refused the connection, so the page did not open. Check the proxy settings of that computer.",
  "error.backend.contextCompactionIneffective":
    "Compaction does not make this chat smaller: after two compactions it still uses {percent}% of the model's context window, so LogiBricks Workspace stops compacting it. Tools and instructions use most of the window. Turn off the MCP servers or computer use that this agent does not need, or select a model with a larger window. Then start a new chat.",
  "error.backend.databaseIntegrity": "LogiBricks Workspace database failed its integrity check.",
  "error.backend.feedbackNeedsPhone":
    "Only the LogiBricks Workspace phone app can send this report, because it adds the phone's version and support log. Open this chat on the phone. If you see this message there, update the phone app.",
  "error.backend.interruptNoSession":
    "LogiBricks Workspace cannot interrupt this agent because its provider session is unavailable.",
  "error.backend.mailboxStateCorrupt":
    "Mailbox state is corrupt or from a newer LogiBricks Workspace version; refusing to overwrite it.",
  "error.backend.mcpOAuthProxyUnavailable":
    "LogiBricks Workspace could not start its local sign-in connection for this server. Restart LogiBricks Workspace, then try again.",
  "error.backend.mcpOAuthRenewalFailed":
    "LogiBricks Workspace could not renew the sign-in to this MCP server now. The sign-in is kept, and the next request tries again. If this error continues, the user can sign out of the server in LogiBricks Workspace and sign in again.",
  "error.backend.mcpOAuthRequestRefused":
    "The MCP server refused this request, but the sign-in to it is still active. Possibly the account cannot use this tool, or the sign-in did not give all the necessary access. The user can examine the plan and the access of the account at the service, or sign in to the server again in LogiBricks Workspace and allow all the access that it asks for.",
  "error.backend.mcpOAuthSignInNeeded":
    "The sign-in to this MCP server has ended. The user must sign in to it again in LogiBricks Workspace.",
  "error.backend.mcpRegistrationUnavailable":
    "The sign-in server cannot register LogiBricks Workspace as an app. Your account is not the cause. To connect, save this server in Marketplace, Apps, then add a sign-in app to it.",
  "error.backend.mcpRemoteBridge":
    "{reason} This command runs the mcp-remote bridge. Choose Streamable HTTP with the URL {url} instead, and LogiBricks Workspace signs you in.",
  "error.backend.mcpRequestDeclined":
    "An MCP server asked for something that LogiBricks Workspace cannot show, so LogiBricks Workspace declined it.",
  "error.backend.mcpServerFailedInProvider":
    "{provider} could not start the MCP server {name}. Its tools are not available to {provider}. {provider} starts the server itself, so the connection test in LogiBricks Workspace can pass. Start a new chat to try again.",
  "error.backend.mcpServerInvalid": "LogiBricks Workspace cannot save this MCP server configuration.",
  "error.backend.mcpServerLimit": "LogiBricks Workspace keeps up to {limit} MCP servers.",
  "error.backend.mcpServerRequestDeclined":
    "The MCP server {name} asked for something that LogiBricks Workspace cannot show, so LogiBricks Workspace declined it.",
  "error.backend.mcpServerSignInPage":
    "The MCP server {name} asked you to sign in on a web page. LogiBricks Workspace does not open this page for a server, so it declined. Open {name} in Marketplace, Apps, and sign in, then ask the agent again.",
  "error.backend.mcpServerUnreachable":
    "LogiBricks Workspace could not reach the server. Check the URL and your network.",
  "error.backend.mcpSignInAppIssuerChanged":
    "The sign-in server of this MCP server changed, so LogiBricks Workspace did not send it the sign-in app. If the change is correct, remove the sign-in app and add it again.",
  "error.backend.mcpSignInMetadataUnreadable":
    "LogiBricks Workspace could not read the sign-in information of this server. Check the server address and try again.",
  "error.backend.mcpSignInNeedsHttps":
    "This server asks for a sign-in, and LogiBricks Workspace signs in only over https. Change the URL to {url}.",
  "error.backend.mcpSignInOnHost":
    "This server asks for a sign-in. Sign in to it in LogiBricks Workspace on the host computer.",
  "error.backend.moonlightWebNotEmbedded": "Moonlight Web is not a LogiBricks Workspace embedded build.",
  "error.backend.providerRetryingLargeContext":
    "The provider failed this request {attempts} times and tries again. This chat uses {percent}% of the model's context window. If the agent does not continue, stop the turn: LogiBricks Workspace then compacts the chat before the next message.",
  "error.backend.routineRunNoSession":
    "LogiBricks Workspace cannot interrupt the active routine run because its provider session is unavailable.",
  "error.backend.shuttingDown": "LogiBricks Workspace is shutting down.",
  "error.backend.taskStartFailed": "LogiBricks Workspace could not start the task. Do the work in this turn instead.",
  "error.backend.windowTemporarilyUnavailable": "The LogiBricks Workspace window is temporarily unavailable.",
  "error.backend.windowUnavailable": "The LogiBricks Workspace window is unavailable.",
  "error.billing.countryRequired":
    "Give your billing country before you pay. Update LogiBricks Workspace to do this, then try again.",
  "error.computerUse.noAppToDrag": "This build of LogiBricks Workspace has no application to drag.",
  "error.computerUse.noAppToShow": "This build of LogiBricks Workspace has no application to show.",
  "error.connector.bitwardenCliMissing":
    "LogiBricks Workspace cannot find the Bitwarden CLI. Install bw, make sure that it works in a new terminal, then connect again.",
  "error.connector.githubUnavailable": "This build of LogiBricks Workspace has no GitHub App.",
  "error.connector.githubUnreachable": "LogiBricks Workspace cannot reach GitHub: {detail}",
  "error.connector.linkUnreachable": "LogiBricks Workspace cannot reach Link: {detail}",
  "error.connector.onePasswordAppUnreachable":
    "LogiBricks Workspace cannot reach the 1Password app. Open 1Password and unlock it. In Settings > Developer, make sure that “Integrate with 1Password CLI” is on. Then try again.",
  "error.connector.onePasswordCliInstallFailed":
    "LogiBricks Workspace could not install the 1Password CLI. Check the connection to the internet, then try again.",
  "error.connector.onePasswordCliMissing":
    "LogiBricks Workspace cannot find the 1Password CLI. Install it and turn on its integration in the 1Password app, or use a service account token.",
  "error.connector.onePasswordUnreachable":
    "LogiBricks Workspace cannot reach 1Password. Check the internet connection, then try again.",
  "error.crm.serverTooOld":
    "This server does not support the CRM. Update LogiBricks Workspace on the computer that runs it.",
  "error.crm.settingsSaveFailed": "LogiBricks Workspace cannot save the CRM setting on this server.",
  "error.crm.sourceFailed": "Stripe sent an answer that LogiBricks Workspace cannot read. Try again later.",
  "error.crm.sourceKeySaveFailed": "LogiBricks Workspace cannot save the Stripe key on this computer.",
  "error.crm.sourceNetwork": "LogiBricks Workspace cannot connect to Stripe. Check the internet connection.",
  "error.host.mobileConnectPublishFailed": "This LogiBricks Workspace could not be published for Mobile Connect.",
  "error.host.nameBeforePublish": "Name this LogiBricks Workspace before publishing it.",
  "error.host.publishBeforeInvite": "Make this LogiBricks Workspace public before creating an invite.",
  "error.host.publishFailed": "This LogiBricks Workspace could not be published.",
  "error.import.hermesLinkNotSaved":
    "{name}: LogiBricks Workspace could not save which agent came from this profile, so the next import adds it as a new agent.",
  "error.import.newerExportSkill":
    "This export was made by a newer export skill. Update LogiBricks Workspace and try again.",
  "error.kind.filePermission":
    "LogiBricks Workspace does not have permission to complete this action. Check the file or folder permissions, then try again.",
  "error.kind.storage":
    "There is not enough storage space. Free some space on the computer running LogiBricks Workspace, then try again.",
  "error.mcp.redirectNotSaved": "The sign-in did not finish. Go back to LogiBricks Workspace to see why.",
  "error.mcp.redirectRefused": "The sign-in was refused. Go back to LogiBricks Workspace and try again.",
  "error.mcp.redirectRelayed": "LogiBricks Workspace sent the sign-in to the server. You can close this window.",
  "error.mcp.redirectSignedIn": "LogiBricks Workspace is signed in. You can close this window.",
  "error.mcp.relayNoState":
    "The server's sign-in page does not protect its return address, so LogiBricks Workspace does not open it on this computer.",
  "error.mcp.signInAppUnsupported":
    "This server does not support sign-in apps. Update LogiBricks Workspace on the host.",
  "error.mcp.signInOnHost": "Sign-in to an MCP server works only in LogiBricks Workspace on the host computer.",
  "error.messaging.discordRelayUnavailable":
    "LogiBricks Workspace cannot receive Discord events on this computer. Sign in, give this computer a name, and try again.",
  "error.messaging.discordRolesUnsupported": "LogiBricks Workspace cannot list Discord roles yet. Try again later.",
  "error.messaging.relayUnavailable":
    "LogiBricks Workspace cannot receive Slack events on this computer. Sign in, give this computer a name, and try again.",
  "error.messaging.telegramRelayUnavailable":
    "LogiBricks Workspace cannot reach Telegram on this computer. Sign in, give this computer a name, and try again.",
  "error.messaging.telegramRelayUnreachable":
    "LogiBricks Workspace cannot connect to its service from this computer. Check the internet connection, VPN, proxy, or firewall, and try again.",
  "error.messaging.telegramServiceUnavailable": "LogiBricks Workspace cannot connect Telegram now. Try again later.",
  "error.provider.accountKeyUnreachable":
    "LogiBricks Workspace could not reach {provider} to check the API key. Check the internet connection, then try again.",
  "error.provider.accountNeedsKey":
    "A {provider} account after the first uses an API key. Update LogiBricks Workspace on this device, then try again.",
  "error.provider.accountsReadOnly":
    "The saved provider accounts cannot be read. Update LogiBricks Workspace before you change them.",
  "error.provider.acpMcpNotLoaded":
    "{provider} did not load LogiBricks Workspace's tools, so this agent cannot use them or reach its teammates. A {provider} team policy can block local MCP servers. Ask your team admin to allow them, then try again.",
  "error.provider.acpNoModels":
    "ACP CLI did not advertise any ACP models. LogiBricks Workspace will not guess a fallback model.",
  "error.provider.acpOwnMcpServerFailed":
    "{provider} could not start the MCP server {name}, so the reply stopped. This server is in your own {provider} settings, not in LogiBricks Workspace. Remove the server there or repair it, then start a new chat.",
  "error.provider.acpRefusedUntilRestart":
    "{provider} refused a message, so LogiBricks Workspace ended its process. Send your message again.",
  "error.provider.acpServerLostEnded": "{provider} lost its connection, so LogiBricks Workspace ended its process.",
  "error.provider.acpSignInLost":
    "{provider} lost its sign-in, so LogiBricks Workspace ended its process. Send your message again.",
  "error.provider.acpSignInNetwork":
    "The sign-in could not reach the provider's server. Check the network connection and the DNS settings of the computer that runs LogiBricks Workspace, then try again.",
  "error.provider.acpUnresponsive": "{provider} did not answer in time, so LogiBricks Workspace ended its process.",
  "error.provider.antigravityHistoryUnreadable":
    "Gemini could not read the saved history of this chat. LogiBricks Workspace started a new Gemini session with the chat history. Send your message again.",
  "error.provider.antigravityMissing": "Gemini is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.antigravitySessionRejected":
    "Gemini refused this request and did not give the cause. An item in the chat history can cause this, such as an image that the agent opened. LogiBricks Workspace started a new Gemini session with the chat history. Try again. If the error continues, choose another model.",
  "error.provider.blankHistoryText":
    "The model did not accept this chat, because its saved history has an empty message. LogiBricks Workspace started a new {provider} session with the chat history. Try again.",
  "error.provider.chatgptPageFailed": "LogiBricks Workspace could not open the ChatGPT connection page.",
  "error.provider.claudeContextFull":
    "This chat became too long for Claude. LogiBricks Workspace started a new Claude Code session with the chat history. Try again.",
  "error.provider.claudeLoginNotSaved":
    "Claude could not save its sign-in on the Mac. Restart the Mac that runs LogiBricks Workspace, then connect Claude again.",
  "error.provider.claudeManagedNotStarted":
    "Claude was downloaded but could not be started. Download it again in LogiBricks Workspace.",
  "error.provider.claudeMissing": "Claude is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.claudeOutdated": "Claude Code {version} is too old. LogiBricks Workspace requires 2.1.232 or newer.",
  "error.provider.cliActivateFailed": "LogiBricks Workspace could not activate the managed CLI.",
  "error.provider.cliOverride": "Remove the explicit CLI path override before updating in LogiBricks Workspace.",
  "error.provider.cliSelectFailed": "LogiBricks Workspace could not select the installed managed CLI.",
  "error.provider.cliTimedOut":
    "{provider} did not answer in time. The computer may be busy. LogiBricks Workspace will try again.",
  "error.provider.cliUpdateFailed": "LogiBricks Workspace could not update the {provider} CLI. {reason}",
  "error.provider.clineMissing": "Cline is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.clineOutdated": "Cline CLI {version} is too old. LogiBricks Workspace requires 3.0.68 or newer.",
  "error.provider.closing": "LogiBricks Workspace is closing.",
  "error.provider.codexAudioRefused":
    "This model cannot listen to audio, so it did not accept the sound in this chat. LogiBricks Workspace started a new Codex session with the chat history. To continue, send your request again and ask the agent to work without the sound. To check sound, select a model that can listen to audio in the agent's model menu.",
  "error.provider.codexHistoryItemMissing":
    "Codex could not continue this chat, because an item in its saved history is missing. LogiBricks Workspace started a new Codex session with the chat history. Try again.",
  "error.provider.codexManagedNotStarted":
    "ChatGPT was downloaded but could not be started. Download it again in LogiBricks Workspace.",
  "error.provider.codexMissing": "ChatGPT is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.codexOutdated": "Codex CLI {version} is too old. LogiBricks Workspace requires 0.156.0 or newer.",
  "error.provider.codexRequestRefused":
    "{provider} refused the request for this chat and did not give the cause. This can occur in a long chat with many images. LogiBricks Workspace started a new {provider} session with the chat history. Try again.",
  "error.provider.codexUnresponsive": "Codex stopped answering, so LogiBricks Workspace ended its process.",
  "error.provider.computerUseConfig":
    "LogiBricks Workspace could not register Computer Use in the Codex configuration. Check that your Codex config.toml is valid and writable, then restart LogiBricks Workspace. You can turn off Computer Use in the teammate settings to continue without it.",
  "error.provider.cursorMissing": "Cursor is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.customAgentNotFound":
    "LogiBricks Workspace cannot find {command}. Enter the full path of the command.",
  "error.provider.customAgentProtocolVersion":
    "The agent uses ACP version {version}. LogiBricks Workspace uses version 1.",
  "error.provider.customAgentsReadOnly":
    "The saved custom agents were written by a newer version of LogiBricks Workspace, or the file cannot be read. Update LogiBricks Workspace to change them.",
  "error.provider.customAgentsUnavailable":
    "This server cannot change its custom agents. Update LogiBricks Workspace on it.",
  "error.provider.detectionSettingsReadOnly":
    "The detection settings were written by a newer version of LogiBricks Workspace, or the file cannot be read. Update LogiBricks Workspace to change them.",
  "error.provider.discoveryUnreachable": "LogiBricks Workspace could not connect to {host}.",
  "error.provider.endpointsReadOnly":
    "The saved endpoints were written by a newer version of LogiBricks Workspace, or the file cannot be read. Update LogiBricks Workspace to change them.",
  "error.provider.environmentNameReserved": "LogiBricks Workspace sets {name} for this provider. Remove this variable.",
  "error.provider.foreignReasoning":
    "{provider} did not accept the earlier reasoning in this chat, because a different account or API key received it. LogiBricks Workspace started a new {provider} session with the chat history. Try again.",
  "error.provider.geminiSettingsUnreadable":
    "Gemini cannot open its settings file on this computer, so it cannot sign in. Quit the other apps that use Gemini, then quit and open LogiBricks Workspace again.",
  "error.provider.grokMissing": "Grok is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.grokOutdated": "Grok CLI {version} is too old. LogiBricks Workspace requires 1.0.5 or newer.",
  "error.provider.hermesRefused":
    "Hermes refused this message before it started. Send it again. If Hermes refuses each message, restart LogiBricks Workspace on the computer that runs this agent.",
  "error.provider.imageCountLimit":
    "The model did not accept this chat because the chat has too many images. LogiBricks Workspace started a new {provider} session with the chat history. Try again.",
  "error.provider.imageUnreadable":
    "The model could not read an image in this chat. LogiBricks Workspace started a new {provider} session with the chat history. Try again. If you sent an image, send a different one.",
  "error.provider.kimiMissing": "Kimi is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.kimiOutdated": "Kimi CLI {version} is too old. LogiBricks Workspace requires 1.52.0 or newer.",
  "error.provider.mcpConfig":
    "LogiBricks Workspace could not register MCP servers in the Codex configuration. Check that your Codex config.toml is valid and writable, then restart LogiBricks Workspace.",
  "error.provider.messageTooLarge":
    "LogiBricks Workspace stopped {provider} because it sent a message larger than {limit} MB.",
  "error.provider.museInvalidToolResult": "Invalid LogiBricks Workspace tool result.",
  "error.provider.museMcpStartupFault":
    "Muse could not start an MCP server and blocked MCP in this session. LogiBricks Workspace started a new Muse session with the chat history. Try again. If the error continues, turn off Computer Use or the failed MCP server for this agent.",
  "error.provider.off": "{provider} is off in LogiBricks Workspace. Turn it on in provider settings first.",
  "error.provider.opencodeCompactionFailed":
    "The model could not summarize this long chat to make room in its context window. LogiBricks Workspace started a new OpenCode session with the chat history. Try again. If the error continues, select a stronger model.",
  "error.provider.opencodeContextTooSmall":
    "This chat does not fit in the model's context window. In Ollama or LM Studio, load the model with a larger context length, and enter the same window in its LogiBricks Workspace provider settings. Or choose a larger model.",
  "error.provider.opencodeMissing": "OpenCode is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.opencodeNetwork":
    "OpenCode could not connect to the model provider. Check the network connection of the computer that runs LogiBricks Workspace, then try again.\n{detail}",
  "error.provider.opencodeOutOfMemory":
    "The model server ran out of memory for this chat. Start a new chat, or load the model with a smaller context length and enter the same window in its LogiBricks Workspace provider settings.",
  "error.provider.opencodeSessionRejected":
    "OpenCode refused the request and did not give the cause. This can occur in a long chat or after a model change. LogiBricks Workspace started a new OpenCode session with the chat history. Try again. If the error continues, select a different model or a lower effort.",
  "error.provider.opencodeUnreadableContent":
    "This model cannot read a file or image in this chat. LogiBricks Workspace started a new OpenCode session with the chat history. Send your message again without the file, or choose a model that can read files. If you added this model to a custom provider, clear Images at Accepts in its settings.",
  "error.provider.releaseSourcesUnreachable":
    "LogiBricks Workspace could not reach the provider release sources. Check the connection and try again.",
  "error.provider.requestFailed": "LogiBricks Workspace could not download {url}. {reason}",
  "error.provider.requestTooLarge":
    "This chat became too large to send to the model. Images in the chat often cause this. LogiBricks Workspace started a new {provider} session with the chat history. Try again.",
  "error.provider.serviceUnreachable":
    "{provider} cannot connect to its service. Check your internet connection. LogiBricks Workspace will try again.",
  "error.provider.sessionStartTimedOut":
    "{provider} did not open a new chat in time, so this message did not start. On the computer that runs LogiBricks Workspace, open Providers, select {provider} and click Restart. Then try again.",
  "error.provider.signOutUnsupported": "LogiBricks Workspace cannot disconnect the {provider} sign-in.",
  "error.provider.startPaused":
    "{provider} did not start several times in a row. LogiBricks Workspace tries again with the next message or routine. To try now, refresh the providers.",
  "error.provider.startStopped":
    "{provider} did not start several times in a row, so LogiBricks Workspace stopped trying. Refresh the providers to try again.",
  "error.provider.useChangeFailed": "LogiBricks Workspace could not change the provider setting.",
  "error.provider.useSettingsReadOnly":
    "The saved provider settings cannot be read. Update LogiBricks Workspace before you change them.",
  "error.remote.appUpdateRequired": "Update this LogiBricks Workspace app before connecting to the host.",
  "error.remote.connectionNotStarted":
    "LogiBricks Workspace could not start the connection to this server. If this continues, quit LogiBricks Workspace and open it again.",
  "error.remote.desktopSetupHostUpdate": "Update LogiBricks Workspace on the host to check remote desktop setup.",
  "error.remote.desktopTestHostUpdate": "Update LogiBricks Workspace on the host to test remote desktop setup.",
  "error.remote.directoryUnreachable":
    "LogiBricks Workspace could not reach the OpenBot service. Check your connection.",
  "error.remote.hostKeyMissing":
    "LogiBricks Workspace cannot verify this server because its security key is missing or changed. Ask the server owner to check the server.",
  "error.remote.localServerNotStarted":
    "The server on this computer did not start. Try again. If it does not start, restart LogiBricks Workspace on this computer.",
  "error.remote.localServersReadOnly":
    "This version of LogiBricks Workspace cannot read the list of servers on this computer. Update LogiBricks Workspace.",
  "error.remote.mobileUpdateRequired": "Update LogiBricks Workspace on your phone or computer before connecting.",
  "error.remote.pairingFailed":
    "Moonlight could not pair with Sunshine on the host. Try again. If the problem continues, restart LogiBricks Workspace on the host.",
  "error.remote.runtimeMissing":
    "The Sunshine and Moonlight Web runtime is missing or is not supported on this host. Install the full LogiBricks Workspace release on a Mac, a Windows x64 host or a Linux x64 host, then restart LogiBricks Workspace.",
  "error.remote.screenRecordingDenied":
    "The host has not allowed LogiBricks Workspace to record its screen. Grant screen recording on the host, then try again.",
  "error.remote.serverNotLoaded": "LogiBricks Workspace could not load the server. Try again.",
  "error.remote.signalProtocolError":
    "Signal and this app do not agree on the connection protocol. Update LogiBricks Workspace, then try again.",
  "error.remote.signalRateLimited":
    "Too many connection attempts. LogiBricks Workspace tries again in {seconds} seconds.",
  "error.remote.webrtcBlocked":
    "This device blocks the connection that LogiBricks Workspace needs. If Lockdown Mode is on, turn it off for LogiBricks Workspace in Settings > Privacy & Security > Lockdown Mode.",
  "error.skill.githubNotFound":
    "LogiBricks Workspace cannot open {repository}. The repository is private, or it does not exist.",
  "error.skill.githubRateLimited":
    "GitHub limits how often LogiBricks Workspace can read it without an account. Try again in one hour.",
  "error.skill.githubTooLarge":
    "LogiBricks Workspace cannot read all files of {repository}. The repository is too large.",
  "error.skill.githubUnavailable": "LogiBricks Workspace cannot read GitHub now. Try again later.",
  "error.skill.managedSlug":
    "LogiBricks Workspace gives every agent its own {slug} skill. Give this skill a different name.",
  "error.storage.unreadableFile": "LogiBricks Workspace cannot read {path}. The file is damaged.",
  "error.team.agentNotificationLevelsUnsupported":
    "This server cannot keep your own notification level for each agent. Update LogiBricks Workspace on the computer that runs it.",
  "error.team.clientUpdateRequired": "Update this LogiBricks Workspace client before connecting to this host.",
  "error.team.connectorPageRefused": "The server sent a page that LogiBricks Workspace does not open.",
  "error.team.connectorsUnsupported":
    "This server cannot manage its connections from here. Update LogiBricks Workspace on the host.",
  "error.team.discordAccessUnsupported": "This server cannot set Discord roles. Update LogiBricks Workspace on it.",
  "error.team.hostUpdateRequired": "Update LogiBricks Workspace on the host before connecting.",
  "error.team.notConfigured": "This LogiBricks Workspace has not been configured.",
  "error.team.providerNotManaged": "LogiBricks Workspace does not manage this provider's CLI.",
  "error.team.routineFlowsUnsupported":
    "This server does not support routine flows. Update LogiBricks Workspace on the computer that runs it.",
  "error.team.serverSafeMode": "This server is in safe mode because LogiBricks Workspace on it does not start.",
  "error.team.serverSafeModeNewerDatabase":
    "LogiBricks Workspace {version} on this server cannot open its data, because a newer LogiBricks Workspace version saved it. A newer LogiBricks Workspace release on the server fixes this.",
  "error.team.serverSafeModeStartFailed":
    "LogiBricks Workspace {version} on this server stopped after it failed to start many times. A newer LogiBricks Workspace release on the server fixes this.",
  "error.team.sidebarPinsUnsupported":
    "This server cannot keep your pinned chats for all of your devices. Update LogiBricks Workspace on the computer that runs it.",
  "error.team.signInRelayUnsupported": "This server cannot relay sign-ins. Update LogiBricks Workspace on the host.",
  "error.team.signInRequired": "LogiBricks Workspace sign-in is required.",
  "error.team.vaultUnsupported":
    "This server cannot open its Vault from here. Update LogiBricks Workspace on the host.",
  "error.update.alreadyRestarting": "LogiBricks Workspace is already restarting.",
  "error.update.appImageMissing":
    "LogiBricks Workspace cannot install the update because its AppImage file was moved, renamed or replaced. Quit LogiBricks Workspace, then open the AppImage file again.",
  "error.update.appImageReadOnly":
    "LogiBricks Workspace cannot install updates in the folder of its AppImage file. Quit LogiBricks Workspace, move the AppImage file to a folder in your home folder, then open it and install the update again.",
  "error.update.checkNoRelease":
    "No published update was found for this platform. LogiBricks Workspace tries again on its own in a few minutes.",
  "error.update.checkUnavailable":
    "The update service did not answer. LogiBricks Workspace tries again on its own in a few minutes.",
  "error.update.installFailed": "Could not install the update. Quit and reopen LogiBricks Workspace, then try again.",
  "error.update.managedByNix": "Nix installs updates for this copy of LogiBricks Workspace. Update it with Nix.",
  "error.update.restartFailed": "LogiBricks Workspace could not restart to install the update.",
  "error.update.restartStarted": "LogiBricks Workspace is already restarting to install the update.",
  "error.update.siblingCheckFailed":
    "Could not verify other LogiBricks Workspace sessions. Try again before installing.",
  "error.update.siblingSession":
    "Another LogiBricks Workspace session is still running from this application. Stop LogiBricks Workspace in every other macOS user account first, then install the update again.",
  "error.update.siblingSessionSameAccount":
    "Another LogiBricks Workspace process is still running in this user account. Quit it, then install the update again.",
  "error.update.signatureNotConfirmed":
    "LogiBricks Workspace could not verify the update. Try again. If this continues, ask your administrator for the installer.",
  "error.voice.prepareRequired":
    "Local voice transcription is unavailable. Run `bun run voice:prepare` and restart LogiBricks Workspace.",
  "error.voice.recordingNotKept": "LogiBricks Workspace could not keep the voice recording.",
  "error.voice.server.invalidAudio":
    "{host} sent audio that LogiBricks Workspace cannot play. Use a server that sends WAV.",
  "error.voice.speech.failed": "LogiBricks Workspace could not read the reply aloud.",
  "error.voice.transcriptionFailed": "LogiBricks Workspace could not transcribe this recording.",
  "error.workflow.githubUnreachable": "LogiBricks Workspace could not reach GitHub. Run the step again.",
  "error.workflow.handoffFailed": "LogiBricks Workspace could not send this step to its agent.",
  "error.workflow.interrupted": "LogiBricks Workspace stopped while this step ran. Run it again.",
  "error.workflow.nodeUnsupported":
    "This version of LogiBricks Workspace cannot run image, file and message steps yet.",
  "error.workflow.providerOffline":
    "LogiBricks Workspace could not reach the provider. Check the internet connection, then run the step again.",
  "error.workflow.serverTooOld":
    "This server does not support workflows. Update LogiBricks Workspace on the computer that runs it.",
  "status.agent.commitCoAuthorOff": "Stop adding LogiBricks Workspace as a co-author to the commits of all agents.",
  "status.agent.commitCoAuthorOn": "Add LogiBricks Workspace as a co-author to the commits of all agents again.",
  "status.agent.mcpServerAdd":
    "Add the MCP server {name}: {target}. Every agent on this server gets its tools. LogiBricks Workspace connects to it to test it.",
  "status.agent.mcpServerChange":
    "Change the MCP server {name} to {target}. Every agent on this server gets its tools. LogiBricks Workspace connects to it to test it.",
  "status.agent.screenCapturePermissionNext":
    "macOS can then ask you to allow Screen Recording for LogiBricks Workspace.",
  "status.computerUse.driverMissing": "This build of LogiBricks Workspace carries no Computer Use driver.",
  "status.host.private": "This LogiBricks Workspace is private.",
  "status.host.ready": "This LogiBricks Workspace is ready for WebRTC connections.",
  "status.host.registered": "Registered this LogiBricks Workspace for WebRTC access.",
  "status.host.stopping": "Making this LogiBricks Workspace private…",
  "status.messaging.answeredOnHost": "Answered on the LogiBricks Workspace host.",
  "status.messaging.approvalTitle": "LogiBricks Workspace asks for approval to continue.",
  "status.messaging.discordNoAgent":
    "No agent can answer here yet. Add the Discord Orchestrator in LogiBricks Workspace.",
  "status.messaging.failed":
    "LogiBricks Workspace could not finish this request. The LogiBricks Workspace host has the details.",
  "status.messaging.hostOnly": "Only the LogiBricks Workspace host can answer this request.",
  "status.messaging.noAgent": "No agent can answer here yet. Add the Slack Orchestrator in LogiBricks Workspace.",
  "status.messaging.noAnswer": "LogiBricks Workspace finished without a written answer.",
  "status.messaging.onlyRequester": "Only {user} can do this. The LogiBricks Workspace host can also answer.",
  "status.messaging.signInReceived": "LogiBricks Workspace received the Slack install. You can close this tab.",
  "status.messaging.signInUnknown":
    "LogiBricks Workspace did not start this Slack install. Start it again in LogiBricks Workspace.",
  "status.messaging.telegramNoAgent":
    "No agent can answer here yet. Add the Telegram Orchestrator in LogiBricks Workspace.",
  "status.messaging.whatsappNoAgent":
    "No agent can answer here yet. Add the WhatsApp Orchestrator in LogiBricks Workspace.",
  "status.messaging.whatsappOtherOpenBot":
    "Another LogiBricks Workspace is linked to this WhatsApp number, so you can get two answers. To fix this, open Linked devices in WhatsApp on your phone and log out the LogiBricks Workspace that you do not use.",
  "status.messaging.whatsappPaused":
    "LogiBricks Workspace stopped answering here for 10 minutes: too many messages came in a short time. If another LogiBricks Workspace is linked to this number, open Linked devices in WhatsApp on your phone and log out the LogiBricks Workspace that you do not use.",
  "status.messaging.whatsappWelcomeDedicated":
    "👋 *LogiBricks Workspace is connected*\n\nThe people you allow in LogiBricks Workspace can now write to this number. A new person gets a code: approve it in LogiBricks Workspace under Requests.\n\nSend *stop* to stop a request.",
  "status.messaging.whatsappWelcomeOwn":
    "👋 *LogiBricks Workspace is connected*\n\nWrite here to ask your agents. The WhatsApp Orchestrator answers, or gives the work to the right agent.\n\nSend *stop* to stop a request.",
  "status.provider.claudeOwnApiKey":
    "Claude Code is set to use an Anthropic API key. Anthropic bills each request to the key's API credit, not to your Claude plan. To use your plan, remove the key from the Claude Code settings or the environment variables, then restart LogiBricks Workspace.",
  "status.remote.suspendedDetail": "Update LogiBricks Workspace on your phone or computer before connecting.\n{detail}",
} as const satisfies PartialTranslation<typeof source>;

/** The English translation catalog for display. It is never the writer's source catalog. */
export const englishSourceDisplay = { ...source, ...englishSourceDisplayOverrides } as const;

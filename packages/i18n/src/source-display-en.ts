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
  "error.agent.instructionsOutside":
    "The instructions file links to a place outside the agent's workspace, so LogiBricks Workspace does not open it.",
  "error.agent.stateCorrupt":
    "Agent state is corrupt or from a newer LogiBricks Workspace version; refusing to overwrite it.",
  "error.agent.oldRoleField":
    "Stored agent profiles use the old role field; update the data before starting LogiBricks Workspace.",
  "error.agent.copyNameFailed": "LogiBricks Workspace could not create a unique agent copy name.",
  "error.agent.turnStalled":
    "{provider} stopped responding, so LogiBricks Workspace ended this turn. Send the message again, or choose another model.",
  "error.agent.workspaceOnlyToolMissing":
    "Workspace only needs {tool}, which LogiBricks Workspace did not find. Install it, or choose Full access in the agent settings.",
  "error.agent.screenCapturePermissionMissing":
    "LogiBricks Workspace does not have the Screen Recording permission. Ask the user to open System Settings > Privacy & Security > Screen & System Audio Recording, turn on LogiBricks Workspace, then quit and open LogiBricks Workspace again.",

  "error.app.notReady": "LogiBricks Workspace is not ready.",

  "error.attachment.mediaUnsupported":
    "This server does not support MP3 or MOV attachments. Update LogiBricks Workspace on the host and retry.",
  "error.attachment.emlUnsupported":
    "This server does not support EML attachments. Update LogiBricks Workspace on the host and retry.",
  "error.attachment.zipUnsupported":
    "This server does not support ZIP attachments. Update LogiBricks Workspace on the host and retry.",
  "error.attachment.mp4Unsupported":
    "This server does not support MP4 attachments. Update LogiBricks Workspace on the host and retry.",
  "error.attachment.svgUnsupported":
    "This server does not support SVG attachments. Update LogiBricks Workspace on the host and retry.",

  "error.auth.serviceUnavailable":
    "LogiBricks Workspace could not reach the account service. Check that the API is running, then try again.",
  "error.auth.networkBlocked":
    "A firewall or proxy on this network blocked LogiBricks Workspace from reaching {host}. Ask your network administrator to allow {host}, then try again.",
  "error.auth.signInFirst": "Sign in to LogiBricks Workspace first.",
  "error.auth.serviceUnreachable":
    "LogiBricks Workspace could not reach the account service. Check your connection, then try again.",
  "error.auth.codeNotSent": "LogiBricks Workspace could not send the sign-in code.",
  "error.auth.deliveryTimeout":
    "LogiBricks Workspace could not confirm delivery in time. The code may still arrive; check delivery before sending again.",
  "error.auth.deliveryInterrupted":
    "The connection ended before LogiBricks Workspace confirmed delivery. Check delivery to avoid sending another code.",
  "error.auth.deliveryUnknown":
    "LogiBricks Workspace could not confirm whether the sign-in code was sent. Check delivery before sending again.",
  "error.auth.companySignInUnavailable": "This LogiBricks Workspace cannot open a browser for the company sign-in.",
  "error.auth.companySignInTokenInvalid": "The provider gave a sign-in that LogiBricks Workspace cannot check.",

  "error.backend.databaseIntegrity": "LogiBricks Workspace database failed its integrity check.",
  "error.backend.windowTemporarilyUnavailable": "The LogiBricks Workspace window is temporarily unavailable.",
  "error.backend.windowUnavailable": "The LogiBricks Workspace window is unavailable.",
  "error.backend.moonlightWebNotEmbedded": "Moonlight Web is not a LogiBricks Workspace embedded build.",
  "error.backend.browserSignInOpenFailed": "LogiBricks Workspace could not open the sign-in window.",
  "error.backend.browserSignInReadFailed": "LogiBricks Workspace could not read the sign-in from the window.",
  "error.backend.contextCompactionIneffective":
    "Compaction does not make this chat smaller: after two compactions it still uses {percent}% of the model's context window, so LogiBricks Workspace stops compacting it. Tools and instructions use most of the window. Turn off the MCP servers or computer use that this agent does not need, or select a model with a larger window. Then start a new chat.",
  "error.backend.providerRetryingLargeContext":
    "The provider failed this request {attempts} times and tries again. This chat uses {percent}% of the model's context window. If the agent does not continue, stop the turn: LogiBricks Workspace then compacts the chat before the next message.",
  "error.backend.shuttingDown": "LogiBricks Workspace is shutting down.",
  "error.backend.mailboxStateCorrupt":
    "Mailbox state is corrupt or from a newer LogiBricks Workspace version; refusing to overwrite it.",
  "error.backend.attachmentCopyFailed": "LogiBricks Workspace could not copy {name}.",
  "error.backend.routineRunNoSession":
    "LogiBricks Workspace cannot interrupt the active routine run because its provider session is unavailable.",
  "error.backend.interruptNoSession":
    "LogiBricks Workspace cannot interrupt this agent because its provider session is unavailable.",
  "error.backend.mcpServerLimit": "LogiBricks Workspace keeps up to {limit} MCP servers.",
  "error.backend.mcpServerInvalid": "LogiBricks Workspace cannot save this MCP server configuration.",
  "error.backend.mcpSignInOnHost":
    "This server asks for a sign-in. Sign in to it in LogiBricks Workspace on the host computer.",
  "error.backend.mcpSignInNeedsHttps":
    "This server asks for a sign-in, and LogiBricks Workspace signs in only over https. Change the URL to {url}.",
  "error.backend.mcpSignInMetadataUnreadable":
    "LogiBricks Workspace could not read the sign-in information of this server. Check the server address and try again.",
  "error.backend.mcpOAuthProxyUnavailable":
    "LogiBricks Workspace could not start its local sign-in connection for this server. Restart LogiBricks Workspace, then try again.",
  "error.backend.mcpOAuthSignInNeeded":
    "The sign-in to this MCP server has ended. The user must sign in to it again in LogiBricks Workspace.",
  "error.backend.mcpServerUnreachable":
    "LogiBricks Workspace could not reach the server. Check the URL and your network.",
  "error.backend.mcpRemoteBridge":
    "{reason} This command runs the mcp-remote bridge. Choose Streamable HTTP with the URL {url} instead, and LogiBricks Workspace signs you in.",
  "error.backend.apiKeySaveFailed": "LogiBricks Workspace could not save the API key. Try again.",
  "error.backend.mcpSignInAppIssuerChanged":
    "The sign-in server of this MCP server changed, so LogiBricks Workspace did not send it the sign-in app. If the change is correct, remove the sign-in app and add it again.",
  "error.backend.taskStartFailed": "LogiBricks Workspace could not start the task. Do the work in this turn instead.",

  "error.computerUse.noAppToDrag": "This build of LogiBricks Workspace has no application to drag.",
  "error.computerUse.noAppToShow": "This build of LogiBricks Workspace has no application to show.",

  "error.connector.githubUnavailable": "This build of LogiBricks Workspace has no GitHub App.",
  "error.connector.githubUnreachable": "LogiBricks Workspace cannot reach GitHub: {detail}",
  "error.connector.linkUnreachable": "LogiBricks Workspace cannot reach Link: {detail}",
  "error.connector.onePasswordCliMissing":
    "LogiBricks Workspace cannot find the 1Password CLI. Install it and turn on its integration in the 1Password app, or use a service account token.",
  "error.connector.onePasswordCliInstallFailed":
    "LogiBricks Workspace could not install the 1Password CLI. Check the connection to the internet, then try again.",

  "error.host.nameBeforePublish": "Name this LogiBricks Workspace before publishing it.",
  "error.host.publishBeforeInvite": "Make this LogiBricks Workspace public before creating an invite.",
  "error.host.publishFailed": "This LogiBricks Workspace could not be published.",
  "error.host.mobileConnectPublishFailed": "This LogiBricks Workspace could not be published for Mobile Connect.",

  "error.import.newerExportSkill":
    "This export was made by a newer export skill. Update LogiBricks Workspace and try again.",
  "error.import.hermesLinkNotSaved":
    "{name}: LogiBricks Workspace could not save which agent came from this profile, so the next import adds it as a new agent.",

  "error.kind.storage":
    "There is not enough storage space. Free some space on the computer running LogiBricks Workspace, then try again.",
  "error.kind.filePermission":
    "LogiBricks Workspace does not have permission to complete this action. Check the file or folder permissions, then try again.",

  "error.mcp.redirectRefused": "The sign-in was refused. Go back to LogiBricks Workspace and try again.",
  "error.mcp.redirectSignedIn": "LogiBricks Workspace is signed in. You can close this window.",
  "error.mcp.signInOnHost": "Sign-in to an MCP server works only in LogiBricks Workspace on the host computer.",
  "error.mcp.signInAppUnsupported":
    "This server does not support sign-in apps. Update LogiBricks Workspace on the host.",
  "error.mcp.redirectRelayed": "LogiBricks Workspace sent the sign-in to the server. You can close this window.",
  "error.mcp.relayNoState":
    "The server's sign-in page does not protect its return address, so LogiBricks Workspace does not open it on this computer.",

  "error.messaging.relayUnavailable":
    "LogiBricks Workspace cannot receive Slack events on this computer. Sign in, give this computer a name, and try again.",
  "error.messaging.discordRelayUnavailable":
    "LogiBricks Workspace cannot receive Discord events on this computer. Sign in, give this computer a name, and try again.",
  "error.messaging.discordRolesUnsupported": "LogiBricks Workspace cannot list Discord roles yet. Try again later.",
  "error.messaging.telegramRelayUnavailable":
    "LogiBricks Workspace cannot reach Telegram on this computer. Sign in, give this computer a name, and try again.",
  "error.messaging.telegramServiceUnavailable": "LogiBricks Workspace cannot connect Telegram now. Try again later.",

  "error.provider.mcpConfig":
    "LogiBricks Workspace could not register MCP servers in the Codex configuration. Check that your Codex config.toml is valid and writable, then restart LogiBricks Workspace.",
  "error.provider.computerUseConfig":
    "LogiBricks Workspace could not register Computer Use in the Codex configuration. Check that your Codex config.toml is valid and writable, then restart LogiBricks Workspace. You can turn off Computer Use in the teammate settings to continue without it.",
  "error.provider.codexUnresponsive": "Codex stopped answering, so LogiBricks Workspace ended its process.",
  "error.provider.acpUnresponsive": "{provider} did not answer in time, so LogiBricks Workspace ended its process.",
  "error.provider.acpSignInLost":
    "{provider} lost its sign-in, so LogiBricks Workspace ended its process. Send your message again.",
  "error.provider.acpMcpNotLoaded":
    "{provider} did not load LogiBricks Workspace's tools, so this agent cannot use them or reach its teammates. A {provider} team policy can block local MCP servers. Ask your team admin to allow them, then try again.",
  "error.provider.endpointsReadOnly":
    "The saved endpoints were written by a newer version of LogiBricks Workspace, or the file cannot be read. Update LogiBricks Workspace to change them.",
  "error.provider.discoveryUnreachable": "LogiBricks Workspace could not connect to {host}.",
  "error.provider.detectionSettingsReadOnly":
    "The detection settings were written by a newer version of LogiBricks Workspace, or the file cannot be read. Update LogiBricks Workspace to change them.",
  "error.provider.releaseSourcesUnreachable":
    "LogiBricks Workspace could not reach the provider release sources. Check the connection and try again.",
  "error.provider.closing": "LogiBricks Workspace is closing.",
  "error.provider.cliOverride": "Remove the explicit CLI path override before updating in LogiBricks Workspace.",
  "error.provider.requestFailed": "LogiBricks Workspace could not download {url}. {reason}",
  "error.provider.acpNoModels":
    "ACP CLI did not advertise any ACP models. LogiBricks Workspace will not guess a fallback model.",
  "error.provider.codexOutdated": "Codex CLI {version} is too old. LogiBricks Workspace requires 0.156.0 or newer.",
  "error.provider.codexManagedNotStarted":
    "ChatGPT was downloaded but could not be started. Download it again in LogiBricks Workspace.",
  "error.provider.codexMissing": "ChatGPT is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.claudeOutdated": "Claude Code {version} is too old. LogiBricks Workspace requires 2.1.232 or newer.",
  "error.provider.claudeManagedNotStarted":
    "Claude was downloaded but could not be started. Download it again in LogiBricks Workspace.",
  "error.provider.claudeMissing": "Claude is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.grokOutdated": "Grok CLI {version} is too old. LogiBricks Workspace requires 1.0.5 or newer.",
  "error.provider.grokMissing": "Grok is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.opencodeMissing": "OpenCode is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.cliTimedOut":
    "{provider} did not answer in time. The computer may be busy. LogiBricks Workspace will try again.",
  "error.provider.startStopped":
    "{provider} did not start several times in a row, so LogiBricks Workspace stopped trying. Refresh the providers to try again.",
  "error.provider.cliSelectFailed": "LogiBricks Workspace could not select the installed managed CLI.",
  "error.provider.cliActivateFailed": "LogiBricks Workspace could not activate the managed CLI.",
  "error.provider.opencodeNetwork":
    "OpenCode could not connect to the model provider. Check the network connection of the computer that runs LogiBricks Workspace, then try again.\n{detail}",
  "error.provider.chatgptPageFailed": "LogiBricks Workspace could not open the ChatGPT connection page.",
  "error.provider.cliUpdateFailed": "LogiBricks Workspace could not update the {provider} CLI. {reason}",
  "error.provider.antigravityMissing": "Gemini is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.cursorMissing": "Cursor is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.clineMissing": "Cline is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.clineOutdated": "Cline CLI {version} is too old. LogiBricks Workspace requires 3.0.68 or newer.",
  "error.provider.kimiMissing": "Kimi is not downloaded. Download it in LogiBricks Workspace to continue.",
  "error.provider.kimiOutdated": "Kimi CLI {version} is too old. LogiBricks Workspace requires 1.52.0 or newer.",
  "error.provider.foreignReasoning":
    "{provider} did not accept the earlier reasoning in this chat, because a different account or API key received it. LogiBricks Workspace started a new {provider} session with the chat history. Try again.",
  "error.provider.opencodeSessionRejected":
    "OpenCode refused the request and did not give the cause. This can occur in a long chat or after a model change. LogiBricks Workspace started a new OpenCode session with the chat history. Try again. If the error continues, select a different model or a lower effort.",
  "error.provider.museMcpStartupFault":
    "Muse could not start an MCP server and blocked MCP in this session. LogiBricks Workspace started a new Muse session with the chat history. Try again. If the error continues, turn off Computer Use or the failed MCP server for this agent.",
  "error.provider.messageTooLarge":
    "LogiBricks Workspace stopped {provider} because it sent a message larger than {limit} MB.",
  "error.provider.customAgentNotFound":
    "LogiBricks Workspace cannot find {command}. Enter the full path of the command.",
  "error.provider.customAgentProtocolVersion":
    "The agent uses ACP version {version}. LogiBricks Workspace uses version 1.",
  "error.provider.customAgentsUnavailable":
    "This server cannot change its custom agents. Update LogiBricks Workspace on it.",
  "error.provider.customAgentsReadOnly":
    "The saved custom agents were written by a newer version of LogiBricks Workspace, or the file cannot be read. Update LogiBricks Workspace to change them.",
  "error.provider.off": "{provider} is off in LogiBricks Workspace. Turn it on in provider settings first.",
  "error.provider.useSettingsReadOnly":
    "The saved provider settings cannot be read. Update LogiBricks Workspace before you change them.",
  "error.provider.useChangeFailed": "LogiBricks Workspace could not change the provider setting.",
  "error.provider.signOutUnsupported": "LogiBricks Workspace cannot disconnect the {provider} sign-in.",
  "error.provider.accountsReadOnly":
    "The saved provider accounts cannot be read. Update LogiBricks Workspace before you change them.",
  "error.provider.museInvalidToolResult": "Invalid LogiBricks Workspace tool result.",

  "error.remote.runtimeMissing":
    "The Sunshine and Moonlight Web runtime is missing or is not supported on this host. Install the full LogiBricks Workspace release on a Mac, a Windows x64 host or a Linux x64 host, then restart LogiBricks Workspace.",
  "error.remote.screenRecordingDenied":
    "The host has not allowed LogiBricks Workspace to record its screen. Grant screen recording on the host, then try again.",
  "error.remote.pairingFailed":
    "Moonlight could not pair with Sunshine on the host. Try again. If the problem continues, restart LogiBricks Workspace on the host.",
  "error.remote.appUpdateRequired": "Update this LogiBricks Workspace app before connecting to the host.",
  "error.remote.desktopSetupHostUpdate": "Update LogiBricks Workspace on the host to check remote desktop setup.",
  "error.remote.desktopTestHostUpdate": "Update LogiBricks Workspace on the host to test remote desktop setup.",
  "error.remote.mobileUpdateRequired": "Update LogiBricks Workspace on your phone or computer before connecting.",
  "error.remote.signalRateLimited":
    "Too many connection attempts. LogiBricks Workspace tries again in {seconds} seconds.",
  "error.remote.signalProtocolError":
    "Signal and this app do not agree on the connection protocol. Update LogiBricks Workspace, then try again.",
  "error.remote.directoryUnreachable":
    "LogiBricks Workspace could not reach the OpenBot service. Check your connection.",
  "error.remote.localServersReadOnly":
    "This version of LogiBricks Workspace cannot read the list of servers on this computer. Update LogiBricks Workspace.",

  "error.skill.managedSlug":
    "LogiBricks Workspace gives every agent its own {slug} skill. Give this skill a different name.",

  "error.storage.unreadableFile": "LogiBricks Workspace cannot read {path}. The file is damaged.",

  "error.team.notConfigured": "This LogiBricks Workspace has not been configured.",
  "error.team.signInRequired": "LogiBricks Workspace sign-in is required.",
  "error.team.clientUpdateRequired": "Update this LogiBricks Workspace client before connecting to this host.",
  "error.team.hostUpdateRequired": "Update LogiBricks Workspace on the host before connecting.",
  "error.team.providerNotManaged": "LogiBricks Workspace does not manage this provider's CLI.",
  "error.team.agentNotificationLevelsUnsupported":
    "This server cannot keep your own notification level for each agent. Update LogiBricks Workspace on the computer that runs it.",
  "error.team.sidebarPinsUnsupported":
    "This server cannot keep your pinned chats for all of your devices. Update LogiBricks Workspace on the computer that runs it.",
  "error.team.routineFlowsUnsupported":
    "This server does not support routine flows. Update LogiBricks Workspace on the computer that runs it.",
  "error.team.signInRelayUnsupported": "This server cannot relay sign-ins. Update LogiBricks Workspace on the host.",
  "error.team.connectorsUnsupported":
    "This server cannot manage its connections from here. Update LogiBricks Workspace on the host.",
  "error.team.vaultUnsupported":
    "This server cannot open its Vault from here. Update LogiBricks Workspace on the host.",
  "error.team.discordAccessUnsupported": "This server cannot set Discord roles. Update LogiBricks Workspace on it.",
  "error.team.connectorPageRefused": "The server sent a page that LogiBricks Workspace does not open.",

  "error.update.restartFailed": "LogiBricks Workspace could not restart to install the update.",
  "error.update.installFailed": "Could not install the update. Quit and reopen LogiBricks Workspace, then try again.",
  "error.update.checkUnavailable":
    "The update service did not answer. LogiBricks Workspace tries again on its own in a few minutes.",
  "error.update.checkNoRelease":
    "No published update was found for this platform. LogiBricks Workspace tries again on its own in a few minutes.",
  "error.update.managedByNix": "Nix installs updates for this copy of LogiBricks Workspace. Update it with Nix.",
  "error.update.siblingSession":
    "Another LogiBricks Workspace session is still running from this application. Stop LogiBricks Workspace in every other macOS user account first, then install the update again.",
  "error.update.siblingSessionSameAccount":
    "Another LogiBricks Workspace process is still running in this user account. Quit it, then install the update again.",
  "error.update.siblingCheckFailed":
    "Could not verify other LogiBricks Workspace sessions. Try again before installing.",
  "error.update.restartStarted": "LogiBricks Workspace is already restarting to install the update.",
  "error.update.alreadyRestarting": "LogiBricks Workspace is already restarting.",

  "error.voice.prepareRequired":
    "Local voice transcription is unavailable. Run `bun run voice:prepare` and restart LogiBricks Workspace.",
  "error.voice.transcriptionFailed": "LogiBricks Workspace could not transcribe this recording.",
  "error.voice.speech.failed": "LogiBricks Workspace could not read the reply aloud.",
  "error.voice.recordingNotKept": "LogiBricks Workspace could not keep the voice recording.",
  "error.voice.server.invalidAudio":
    "{host} sent audio that LogiBricks Workspace cannot play. Use a server that sends WAV.",

  "error.workflow.serverTooOld":
    "This server does not support workflows. Update LogiBricks Workspace on the computer that runs it.",
  "error.workflow.nodeUnsupported":
    "This version of LogiBricks Workspace cannot run image, file and message steps yet.",
  "error.workflow.interrupted": "LogiBricks Workspace stopped while this step ran. Run it again.",
  "error.workflow.handoffFailed": "LogiBricks Workspace could not send this step to its agent.",
  "error.workflow.githubUnreachable": "LogiBricks Workspace could not reach GitHub. Run the step again.",

  "status.agent.mcpServerAdd":
    "Add the MCP server {name}: {target}. Every agent on this server gets its tools. LogiBricks Workspace connects to it to test it.",
  "status.agent.mcpServerChange":
    "Change the MCP server {name} to {target}. Every agent on this server gets its tools. LogiBricks Workspace connects to it to test it.",

  "status.computerUse.driverMissing": "This build of LogiBricks Workspace carries no Computer Use driver.",

  "status.host.registered": "Registered this LogiBricks Workspace for WebRTC access.",
  "status.host.ready": "This LogiBricks Workspace is ready for WebRTC connections.",
  "status.host.stopping": "Making this LogiBricks Workspace private…",
  "status.host.private": "This LogiBricks Workspace is private.",

  "status.messaging.queued": "Waiting: LogiBricks Workspace is working on another request. The answer comes here.",
  "status.messaging.failed":
    "LogiBricks Workspace could not finish this request. The LogiBricks Workspace host has the details.",
  "status.messaging.noAnswer": "LogiBricks Workspace finished without a written answer.",
  "status.messaging.noAgent": "No agent can answer here yet. Add the Slack Orchestrator in LogiBricks Workspace.",
  "status.messaging.approvalTitle": "LogiBricks Workspace asks for approval to continue.",
  "status.messaging.answeredOnHost": "Answered on the LogiBricks Workspace host.",
  "status.messaging.onlyRequester": "Only {user} can do this. The LogiBricks Workspace host can also answer.",
  "status.messaging.hostOnly": "Only the LogiBricks Workspace host can answer this request.",
  "status.messaging.discordNoAgent":
    "No agent can answer here yet. Add the Discord Orchestrator in LogiBricks Workspace.",
  "status.messaging.signInReceived": "LogiBricks Workspace received the Slack install. You can close this tab.",
  "status.messaging.signInUnknown":
    "LogiBricks Workspace did not start this Slack install. Start it again in LogiBricks Workspace.",
  "status.messaging.telegramNoAgent":
    "No agent can answer here yet. Add the Telegram Orchestrator in LogiBricks Workspace.",
  "status.messaging.whatsappNoAgent":
    "No agent can answer here yet. Add the WhatsApp Orchestrator in LogiBricks Workspace.",
  "status.messaging.whatsappWelcomeOwn":
    "👋 *LogiBricks Workspace is connected*\n\nWrite here to ask your agents. The WhatsApp Orchestrator answers, or gives the work to the right agent.\n\nSend *stop* to stop a request.",
  "status.messaging.whatsappWelcomeDedicated":
    "👋 *LogiBricks Workspace is connected*\n\nThe people you allow in LogiBricks Workspace can now write to this number. A new person gets a code: approve it in LogiBricks Workspace under Requests.\n\nSend *stop* to stop a request.",

  "status.remote.suspendedDetail": "Update LogiBricks Workspace on your phone or computer before connecting.\n{detail}",
} as const satisfies PartialTranslation<typeof source>;

/** The English translation catalog for display. It is never the writer's source catalog. */
export const englishSourceDisplay = { ...source, ...englishSourceDisplayOverrides } as const;

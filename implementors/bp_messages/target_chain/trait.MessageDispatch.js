(function() {var implementors = {};
implementors["bp_messages"] = [];
implementors["bridge_runtime_common"] = [{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html\" title=\"trait bridge_runtime_common::messages::MessageBridge\">MessageBridge</a>, ThisRuntime, ThisCurrency, ThisDispatchInstance&gt; <a class=\"trait\" href=\"bp_messages/target_chain/trait.MessageDispatch.html\" title=\"trait bp_messages::target_chain::MessageDispatch\">MessageDispatch</a>&lt;&lt;&lt;B as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html\" title=\"trait bridge_runtime_common::messages::MessageBridge\">MessageBridge</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html#associatedtype.ThisChain\" title=\"type bridge_runtime_common::messages::MessageBridge::ThisChain\">ThisChain</a> as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html\" title=\"trait bridge_runtime_common::messages::ChainWithMessages\">ChainWithMessages</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html#associatedtype.AccountId\" title=\"type bridge_runtime_common::messages::ChainWithMessages::AccountId\">AccountId</a>, &lt;&lt;B as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html\" title=\"trait bridge_runtime_common::messages::MessageBridge\">MessageBridge</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html#associatedtype.BridgedChain\" title=\"type bridge_runtime_common::messages::MessageBridge::BridgedChain\">BridgedChain</a> as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html\" title=\"trait bridge_runtime_common::messages::ChainWithMessages\">ChainWithMessages</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html#associatedtype.Balance\" title=\"type bridge_runtime_common::messages::ChainWithMessages::Balance\">Balance</a>&gt; for <a class=\"struct\" href=\"bridge_runtime_common/messages/target/struct.FromBridgedChainMessageDispatch.html\" title=\"struct bridge_runtime_common::messages::target::FromBridgedChainMessageDispatch\">FromBridgedChainMessageDispatch</a>&lt;B, ThisRuntime, ThisCurrency, ThisDispatchInstance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ThisDispatchInstance: Instance,<br>&nbsp;&nbsp;&nbsp;&nbsp;ThisRuntime: <a class=\"trait\" href=\"pallet_bridge_dispatch/trait.Config.html\" title=\"trait pallet_bridge_dispatch::Config\">Config</a>&lt;ThisDispatchInstance, MessageId = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.tuple.html\">(</a><a class=\"type\" href=\"bp_messages/type.LaneId.html\" title=\"type bp_messages::LaneId\">LaneId</a>, <a class=\"type\" href=\"bp_messages/type.MessageNonce.html\" title=\"type bp_messages::MessageNonce\">MessageNonce</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.tuple.html\">)</a>&gt; + Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ThisRuntime as Config&gt;::OnChargeTransaction: OnChargeTransaction&lt;ThisRuntime, Balance = &lt;&lt;B as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html\" title=\"trait bridge_runtime_common::messages::MessageBridge\">MessageBridge</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html#associatedtype.ThisChain\" title=\"type bridge_runtime_common::messages::MessageBridge::ThisChain\">ThisChain</a> as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html\" title=\"trait bridge_runtime_common::messages::ChainWithMessages\">ChainWithMessages</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html#associatedtype.Balance\" title=\"type bridge_runtime_common::messages::ChainWithMessages::Balance\">Balance</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;ThisCurrency: Currency&lt;&lt;&lt;B as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html\" title=\"trait bridge_runtime_common::messages::MessageBridge\">MessageBridge</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html#associatedtype.ThisChain\" title=\"type bridge_runtime_common::messages::MessageBridge::ThisChain\">ThisChain</a> as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html\" title=\"trait bridge_runtime_common::messages::ChainWithMessages\">ChainWithMessages</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html#associatedtype.AccountId\" title=\"type bridge_runtime_common::messages::ChainWithMessages::AccountId\">AccountId</a>, Balance = &lt;&lt;B as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html\" title=\"trait bridge_runtime_common::messages::MessageBridge\">MessageBridge</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html#associatedtype.ThisChain\" title=\"type bridge_runtime_common::messages::MessageBridge::ThisChain\">ThisChain</a> as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html\" title=\"trait bridge_runtime_common::messages::ChainWithMessages\">ChainWithMessages</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html#associatedtype.Balance\" title=\"type bridge_runtime_common::messages::ChainWithMessages::Balance\">Balance</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ThisRuntime as <a class=\"trait\" href=\"pallet_bridge_dispatch/trait.Config.html\" title=\"trait pallet_bridge_dispatch::Config\">Config</a>&lt;ThisDispatchInstance&gt;&gt;::<a class=\"type\" href=\"pallet_bridge_dispatch/trait.Config.html#associatedtype.Event\" title=\"type pallet_bridge_dispatch::Config::Event\">Event</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pallet_bridge_dispatch/enum.RawEvent.html\" title=\"enum pallet_bridge_dispatch::RawEvent\">RawEvent</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.tuple.html\">(</a><a class=\"type\" href=\"bp_messages/type.LaneId.html\" title=\"type bp_messages::LaneId\">LaneId</a>, <a class=\"type\" href=\"bp_messages/type.MessageNonce.html\" title=\"type bp_messages::MessageNonce\">MessageNonce</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.tuple.html\">)</a>, &lt;&lt;B as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html\" title=\"trait bridge_runtime_common::messages::MessageBridge\">MessageBridge</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html#associatedtype.ThisChain\" title=\"type bridge_runtime_common::messages::MessageBridge::ThisChain\">ThisChain</a> as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html\" title=\"trait bridge_runtime_common::messages::ChainWithMessages\">ChainWithMessages</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html#associatedtype.AccountId\" title=\"type bridge_runtime_common::messages::ChainWithMessages::AccountId\">AccountId</a>, ThisDispatchInstance&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"pallet_bridge_dispatch/type.Pallet.html\" title=\"type pallet_bridge_dispatch::Pallet\">Pallet</a>&lt;ThisRuntime, ThisDispatchInstance&gt;: <a class=\"trait\" href=\"bp_message_dispatch/trait.MessageDispatch.html\" title=\"trait bp_message_dispatch::MessageDispatch\">MessageDispatch</a>&lt;&lt;&lt;B as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html\" title=\"trait bridge_runtime_common::messages::MessageBridge\">MessageBridge</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.MessageBridge.html#associatedtype.ThisChain\" title=\"type bridge_runtime_common::messages::MessageBridge::ThisChain\">ThisChain</a> as <a class=\"trait\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html\" title=\"trait bridge_runtime_common::messages::ChainWithMessages\">ChainWithMessages</a>&gt;::<a class=\"type\" href=\"bridge_runtime_common/messages/trait.ChainWithMessages.html#associatedtype.AccountId\" title=\"type bridge_runtime_common::messages::ChainWithMessages::AccountId\">AccountId</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.tuple.html\">(</a><a class=\"type\" href=\"bp_messages/type.LaneId.html\" title=\"type bp_messages::LaneId\">LaneId</a>, <a class=\"type\" href=\"bp_messages/type.MessageNonce.html\" title=\"type bp_messages::MessageNonce\">MessageNonce</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.55.0/std/primitive.tuple.html\">)</a>, Message = <a class=\"type\" href=\"bridge_runtime_common/messages/target/type.FromBridgedChainMessagePayload.html\" title=\"type bridge_runtime_common::messages::target::FromBridgedChainMessagePayload\">FromBridgedChainMessagePayload</a>&lt;B&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["bridge_runtime_common::messages::target::FromBridgedChainMessageDispatch"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
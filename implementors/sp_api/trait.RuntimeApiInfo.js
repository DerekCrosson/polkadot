(function() {var implementors = {};
implementors["bp_rialto"] = [{"text":"impl&lt;Block:&nbsp;BlockT&gt; RuntimeApiInfo for dyn <a class=\"trait\" href=\"bp_rialto/trait.RialtoFinalityApi.html\" title=\"trait bp_rialto::RialtoFinalityApi\">RialtoFinalityApi</a>&lt;Block&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, OutboundMessageFee:&nbsp;Parameter, OutboundPayload:&nbsp;Parameter&gt; RuntimeApiInfo for dyn <a class=\"trait\" href=\"bp_rialto/trait.ToRialtoOutboundLaneApi.html\" title=\"trait bp_rialto::ToRialtoOutboundLaneApi\">ToRialtoOutboundLaneApi</a>&lt;Block, OutboundMessageFee, OutboundPayload&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT&gt; RuntimeApiInfo for dyn <a class=\"trait\" href=\"bp_rialto/trait.FromRialtoInboundLaneApi.html\" title=\"trait bp_rialto::FromRialtoInboundLaneApi\">FromRialtoInboundLaneApi</a>&lt;Block&gt;","synthetic":false,"types":[]}];
implementors["bp_rococo"] = [{"text":"impl&lt;Block:&nbsp;BlockT&gt; RuntimeApiInfo for dyn <a class=\"trait\" href=\"bp_rococo/trait.RococoFinalityApi.html\" title=\"trait bp_rococo::RococoFinalityApi\">RococoFinalityApi</a>&lt;Block&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, OutboundMessageFee:&nbsp;<a class=\"trait\" href=\"bp_rococo/trait.Parameter.html\" title=\"trait bp_rococo::Parameter\">Parameter</a>, OutboundPayload:&nbsp;<a class=\"trait\" href=\"bp_rococo/trait.Parameter.html\" title=\"trait bp_rococo::Parameter\">Parameter</a>&gt; RuntimeApiInfo for dyn <a class=\"trait\" href=\"bp_rococo/trait.ToRococoOutboundLaneApi.html\" title=\"trait bp_rococo::ToRococoOutboundLaneApi\">ToRococoOutboundLaneApi</a>&lt;Block, OutboundMessageFee, OutboundPayload&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT&gt; RuntimeApiInfo for dyn <a class=\"trait\" href=\"bp_rococo/trait.FromRococoInboundLaneApi.html\" title=\"trait bp_rococo::FromRococoInboundLaneApi\">FromRococoInboundLaneApi</a>&lt;Block&gt;","synthetic":false,"types":[]}];
implementors["bp_wococo"] = [{"text":"impl&lt;Block:&nbsp;BlockT&gt; RuntimeApiInfo for dyn <a class=\"trait\" href=\"bp_wococo/trait.WococoFinalityApi.html\" title=\"trait bp_wococo::WococoFinalityApi\">WococoFinalityApi</a>&lt;Block&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, OutboundMessageFee:&nbsp;<a class=\"trait\" href=\"bp_wococo/trait.Parameter.html\" title=\"trait bp_wococo::Parameter\">Parameter</a>, OutboundPayload:&nbsp;<a class=\"trait\" href=\"bp_wococo/trait.Parameter.html\" title=\"trait bp_wococo::Parameter\">Parameter</a>&gt; RuntimeApiInfo for dyn <a class=\"trait\" href=\"bp_wococo/trait.ToWococoOutboundLaneApi.html\" title=\"trait bp_wococo::ToWococoOutboundLaneApi\">ToWococoOutboundLaneApi</a>&lt;Block, OutboundMessageFee, OutboundPayload&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT&gt; RuntimeApiInfo for dyn <a class=\"trait\" href=\"bp_wococo/trait.FromWococoInboundLaneApi.html\" title=\"trait bp_wococo::FromWococoInboundLaneApi\">FromWococoInboundLaneApi</a>&lt;Block&gt;","synthetic":false,"types":[]}];
implementors["polkadot_primitives"] = [{"text":"impl&lt;Block:&nbsp;BlockT&gt; RuntimeApiInfo for dyn <a class=\"trait\" href=\"polkadot_primitives/v0/trait.ParachainHost.html\" title=\"trait polkadot_primitives::v0::ParachainHost\">ParachainHost</a>&lt;Block&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, H:&nbsp;Decode, N:&nbsp;Encode + Decode&gt; RuntimeApiInfo for dyn <a class=\"trait\" href=\"polkadot_primitives/v1/trait.ParachainHost.html\" title=\"trait polkadot_primitives::v1::ParachainHost\">ParachainHost</a>&lt;Block, H, N&gt;","synthetic":false,"types":[]}];
implementors["polkadot_test_runtime"] = [{"text":"impl&lt;Block:&nbsp;BlockT&gt; RuntimeApiInfo for dyn <a class=\"trait\" href=\"polkadot_test_runtime/trait.GetLastTimestamp.html\" title=\"trait polkadot_test_runtime::GetLastTimestamp\">GetLastTimestamp</a>&lt;Block&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
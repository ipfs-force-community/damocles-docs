(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{385:function(e,t,a){"use strict";a.r(t);var n=a(17),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"task-status-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task-status-flow"}},[e._v("#")]),e._v(" Task status flow")]),e._v(" "),a("p",[e._v("Understanding the status flow of tasks will help users understand the status of "),a("code",[e._v("damocles-worker")]),e._v(" and perform targeted recovery of paused sector tasks.")]),e._v(" "),a("p",[e._v("The status flow of the task is related to the type of the task, that is, "),a("RouterLink",{attrs:{to:"/intro/03.damocles-worker-config.html#basic-configuration-example-3"}},[e._v("the "),a("code",[e._v("plan")]),e._v(" option in "),a("code",[e._v("sealing_thread")])]),e._v(". We will elaborate them separately .")],1),e._v(" "),a("p",[e._v("In the description below, entries prefixed with "),a("code",[e._v("State::")]),e._v(" are states, and entries prefixed with "),a("code",[e._v("Event::")]),e._v(" are events or procedures.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("State::A => {\n\tEvent::B => State::C,\n\tEvent::D => State::E,\n}\n")])])]),a("p",[e._v("means when the task is in "),a("code",[e._v("A")]),e._v(" state")]),e._v(" "),a("ol",[a("li",[e._v("If "),a("code",[e._v("B")]),e._v(" event occurs, then go to "),a("code",[e._v("C")]),e._v(" state")]),e._v(" "),a("li",[e._v("If "),a("code",[e._v("D")]),e._v(" event occurs, then go to "),a("code",[e._v("E")]),e._v(" state")])]),e._v(" "),a("p",[e._v("In addition…")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("For each state, transitions to one or more other states may occur, that is, one or more lines may appear in "),a("code",[e._v("{}")])])]),e._v(" "),a("li",[a("p",[e._v("In addition to the specific states listed, there are also some special states, such as:")])])]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("State::Aborted")]),e._v(", indicating that the sector did not complete normally")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In any logic evaluations, an exception belonging to the "),a("code",[e._v("abort")]),e._v(" category will cause the task to change to the "),a("code",[e._v("Aborted")]),e._v(" state. The task will be terminated, and the current "),a("code",[e._v("sealing_thread")]),e._v(" will move onto the next task")])]),e._v(" "),a("li",[a("p",[e._v("When the user sends the "),a("code",[e._v("resume")]),e._v(" command to a paused task with the "),a("code",[e._v("Aborted")]),e._v(" state is attached, the flow described above will still be taken into effect")]),e._v(" "),a("p",[e._v("Therefore, users can use this mechanism to handle exceptions that are difficult to recover, but have not yet been defined as "),a("code",[e._v("abort")]),e._v(" category")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("State::Finished")]),e._v(" indicates that the sector completed normally")])])]),e._v(" "),a("h2",{attrs:{id:"the-state-flow-of-sealer-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-state-flow-of-sealer-tasks"}},[e._v("#")]),e._v(" The state flow of sealer tasks")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Empty state, that is, the sector has not been allocated yet\nState::Empty => {\n\t// apply for a new sector\n\tEvent::Allocate(_) => State::Allocated,\n},\n\n// new sector is allocated\nState::Allocated => {\n\t// request a deal\n\tEvent::AcquireDeals(_) => State::DealsAcquired,\n},\n\n// deal has been applied\nState::DealsAcquired => {\n\t// fill piece data\n\tEvent::AddPiece(_) => State::PieceAdded,\n},\n\n// data is filled\nState::PieceAdded => {\n\t// construct TreeD\n\tEvent::BuildTreeD => State::TreeDBuilt,\n},\n\n// TreeD has been generated\nState::TreeDBuilt => {\n\t// Request on-chain random seed required by pc1\n\tEvent::AssignTicket(_) => State::TicketAssigned,\n},\n\n// The on-chain random seed required by pc1 has been obtained\nState::TicketAssigned => {\n\t// execute pc1\n\tEvent::PC1(_, _) => State::PC1Done,\n},\n\n// pc1 is done\nState::PC1Done => {\n\t// execute pc2\n\tEvent::PC2(_) => State::PC2Done,\n},\n\n// pc2 is done\nState::PC2Done => {\n\t// Submit PreCommit on-chain information\n\tEvent::SubmitPC => State::PCSubmitted,\n},\n\n// PreCommit on-chain information has been submitted\nState::PCSubmitted => {\n\t// Failed to submit, need to resubmit\n\tEvent::ReSubmitPC => State::PC2Done,\n\t// Successfully submitted message\n\tEvent::CheckPC => State::PCLanded,\n},\n\n// PreCommit information has been submitted \nState::PCLanded => {\n\t// Perform persistence of sector files\n\tEvent::Persist(_) => State::Persisted,\n},\n\n// sector files are persisted\nState::Persisted => {\n\t// Pass persistent files check\n\tEvent::SubmitPersistance => State::PersistanceSubmitted,\n},\n\n// Persistence files are confirmed\nState::PersistanceSubmitted => {\n\t// Request on-chain random seed required for c1\n\tEvent::AssignSeed(_) => State::SeedAssigned,\n},\n\n// The on-chain random seed required by c1 has been obtained\nState::SeedAssigned => {\n\t// execute c1\n\tEvent::C1(_) => State::C1Done,\n},\n\n// c1 is done\nState::C1Done => {\n\t// execute c2\n\tEvent::C2(_) => State::C2Done,\n},\n\n// C2 is done\nState::C2Done => {\n\t// Submit CommitProof information\n\tEvent::SubmitProof => State::ProofSubmitted,\n},\n\n// CommitProof information has been submitted\nState::ProofSubmitted => {\n\t// Failed to submit, need to resubmit\n\tEvent::ReSubmitProof => State::C2Done,\n\t// Successful on-chain or skip on-chain check\n\tEvent::Finish => State::Finished,\n},\n")])])]),a("h2",{attrs:{id:"upgrade-snapup-task-status-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-snapup-task-status-flow"}},[e._v("#")]),e._v(" Upgrade (snapup) task status flow")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Empty state, that is, the sector has not been allocated yet\nState::Empty => {\n\t// Allocate sector and deals for upgrade\n\tEvent::AllocatedSnapUpSector(_, _, _) => State::Allocated,\n},\n\n// Sector and deal for upgrade are allocated\nState::Allocated => {\n\t// fill piece data\n\tEvent::AddPiece(_) => State::PieceAdded,\n},\n\n// data is filled\nState::PieceAdded => {\n\t// construct TreeD\n\tEvent::BuildTreeD => State::TreeDBuilt,\n},\n\n// TreeD has been generated\nState::TreeDBuilt => {\n\t// perform Snap encoding\n\tEvent::SnapEncode(_) => State::SnapEncoded,\n},\n\n// Snap encoding is done\nState::SnapEncoded => {\n\t// Compute Snap proof\n\tEvent::SnapProve(_) => State::SnapProved,\n},\n\n// Snap proof has been generated\nState::SnapProved => {\n\t// Perform persistence of sector files\n\tEvent::Persist(_) => State::Persisted,\n},\n\n// sector files are persisted\nState::Persisted => {\n\t// files fails check\n\tEvent::RePersist => State::SnapProved,\n\t// files passed the check\n\tEvent::Finish => State::Finished,\n},\n")])])]),a("h2",{attrs:{id:"the-state-flow-of-rebuild-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-state-flow-of-rebuild-tasks"}},[e._v("#")]),e._v(" The state flow of rebuild tasks")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Empty state, that is, the sector has not been allocated yet\nState::Empty => {\n\t// Allocate sector info for rebuild\n\tEvent::AllocatedRebuildSector(_) => State::Allocated,\n},\n\n// Sector info for rebuild are allocated\nState::Allocated => {\n\t// fill piece data\n\tEvent::AddPiece(_) => State::PieceAdded,\n},\n\n// Data is filled\nState::PieceAdded => {\n\t// Construct TreeD\n\tEvent::BuildTreeD => State::TreeDBuilt,\n},\n\n// TreeD has been generated\nState::TreeDBuilt => {\n\t// Execute pc1\n\tEvent::PC1(_, _) => State::PC1Done,\n},\n\n// PC1 is done\nState::PC1Done => {\n\t// Execute pc2\n\tEvent::PC2(_) => State::PC2Done,\n},\n\n// PC2 is done\nState::PC2Done => {\n\t// Check sealed file (execute c1)\n\tEvent::CheckSealed => State::SealedChecked,\n},\n\n// Sealed file is checked (c1 is done)\nState::SealedChecked => {\n\t// Non upgrade sector, skip snapup steps\n\tEvent::SkipSnap => State::SnapDone,\n\t// Upgrade sector, fill piece data\n\tEvent::AddPiece(_) => State::SnapPieceAdded,\n},\n\n// Data is filled (only upgrade sector)\nState::SnapPieceAdded => {\n\t// Construct TreeD (only upgrade sector)\n\tEvent::BuildTreeD => State::SnapTreeDBuilt,\n},\n\n// TreeD has been generated (only upgrade sector)\nState::SnapTreeDBuilt => {\n\t// Perform Snap encoding (only upgrade sector)\n\tEvent::SnapEncode(_) => State::SnapEncoded,\n},\n\n// Snap encoding is done (only upgrade sector)\nState::SnapEncoded => {\n\t// Compute Snap proof (only upgrade sector)\n\tEvent::SnapProve(_) => State::SnapDone,\n},\n\n// snapup is done or not needed\nState::SnapDone => {\n\t// Perform persistence of sector files\n\tEvent::Persist(_) => State::Persisted,\n},\n\n// Sector files are persisted\nState::Persisted => {\n\t// Pass persistent files check\n\tEvent::SubmitPersistance => State::Finished,\n},\n")])])]),a("h2",{attrs:{id:"example-usage-in-combination-with-worker-management-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage-in-combination-with-worker-management-tools"}},[e._v("#")]),e._v(" Example usage in combination with worker management tools")]),e._v(" "),a("h4",{attrs:{id:"_1-for-a-sector-sealing-task-that-has-been-paused-due-to-an-error-and-cannot-be-resumed-such-as-the-ticket-has-expired-you-can-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-for-a-sector-sealing-task-that-has-been-paused-due-to-an-error-and-cannot-be-resumed-such-as-the-ticket-has-expired-you-can-use"}},[e._v("#")]),e._v(" 1. For a sector sealing task that has been paused due to an error and cannot be resumed, such as the ticket has expired, you can use…")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("damocles-worker worker -c <config file path> resume --state Aborted --index <index>\n")])])]),a("p",[e._v("or")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("damocles-manager util worker resume <worker instance name or address> <thread index> Aborted\n")])])]),a("p",[e._v("to terminate the current task.")]),e._v(" "),a("h4",{attrs:{id:"_2-for-a-sector-sealing-task-that-has-been-paused-with-an-error-but-it-is-considered-that-the-task-can-be-reattempted-from-a-previous-state-for-example-if-the-ticket-has-expired-you-can-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-for-a-sector-sealing-task-that-has-been-paused-with-an-error-but-it-is-considered-that-the-task-can-be-reattempted-from-a-previous-state-for-example-if-the-ticket-has-expired-you-can-use"}},[e._v("#")]),e._v(" 2. For a sector sealing task that has been paused with an error, but it is considered that the task can be reattempted from a previous state. For example, if the ticket has expired, you can use…")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("damocles-worker worker -c <config file path> resume --state TreeDBuilt --index <index>\n")])])]),a("p",[e._v("or")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("damocles-manager util worker resume <worker instance name or address> <thread index> TreeDBuilt\n")])])]),a("p",[e._v("to let it fall back to the previous state and retry.")])])}),[],!1,null,null,null);t.default=s.exports}}]);
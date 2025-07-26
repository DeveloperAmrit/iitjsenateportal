import { Edge, Node } from 'reactflow';

const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export const initialNodes: Node[] = [
  { id: 'root', type: 'input', data: { label: 'Student Senate' }, position, className: 'root-node' },

  { id: 'acac', data: { label: 'Academics & Co-curricular Activity Council (ACAC)' }, position, className: 'council-node' },
  { id: 'acac-vp1', data: { label: 'Krish Teckchandani', position: 'VP, Board of Academic Interaction (BAI)' }, position, className: 'vp-node' },
  { id: 'acac-vp2', data: { label: 'Sourav Chahar', position: 'VP, Board of Departmental Societies (BDS)' }, position, className: 'vp-node' },
  { id: 'acac-vp3', data: { label: 'Anchitya Kumar', position: 'VP, Board of Career Development (BCD)' }, position, className: 'vp-node' },
  { id: 'acac-vp4', data: { label: 'Raghuveer Kulkarni', position: 'VP, Society of Alumni Affairs (SAA)' }, position, className: 'vp-node' },
  { id: 'acac-vp5', data: { label: 'Vyom Shah', position: 'VP, Board of Innovation and Entrepreneurship (BIE)' }, position, className: 'vp-node' },
  { id: 'acac-vp6', data: { label: 'Sambhav Jha', position: 'VP, Board of Co Curricular Affairs (BCCA)' }, position, className: 'vp-node' },
  { id: 'acac-coord1', data: { label: 'Coordinator 1' }, position, className: 'coordinator-node' },
  { id: 'acac-coord2', data: { label: 'Coordinator 2' }, position, className: 'coordinator-node' },
  { id: 'acac-overall-coord1', data: { label: 'Overall Coordinator 1' }, position, className: 'overall-coordinator-node' },


  { id: 'sac', data: { label: 'Student Activity Council (SAC)' }, position, className: 'council-node' },
  { id: 'sac-vp1', data: { label: 'Vaibhav Singh', position: 'VP, Board of Art & Culture (BAC)' }, position, className: 'vp-node' },
  { id: 'sac-vp2', data: { label: 'Sudhanshu Tamhankar', position: 'VP, Board of Student Sports (BSS)' }, position, className: 'vp-node' },
  { id: 'sac-vp3', data: { label: 'Post Vacant', position: 'VP, Board of Student Welfare (BSW)' }, position, className: 'vp-node-vacant' },
  { id: 'sac-vp4', data: { label: 'Anshit Agarwal', position: 'VP, Board of Literary Affairs (BLA)' }, position, className: 'vp-node' },
  { id: 'sac-vp5', data: { label: 'Harsh Kumar', position: 'VP, Board of Hostel Affairs (BHA)' }, position, className: 'vp-node' },
  { id: 'sac-coord1', data: { label: 'Coordinator 1' }, position, className: 'coordinator-node' },
  { id: 'sac-coord2', data: { label: 'Coordinator 2' }, position, className: 'coordinator-node' },
];

export const initialEdges: Edge[] = [
  { id: 'root-acac', source: 'root', target: 'acac', type: edgeType },
  { id: 'root-sac', source: 'root', target: 'sac', type: edgeType },

  { id: 'acac-vp1-edge', source: 'acac', target: 'acac-vp1', type: edgeType },
  { id: 'acac-vp2-edge', source: 'acac', target: 'acac-vp2', type: edgeType },
  { id: 'acac-vp3-edge', source: 'acac', target: 'acac-vp3', type: edgeType },
  { id: 'acac-vp4-edge', source: 'acac', target: 'acac-vp4', type: edgeType },
  { id: 'acac-vp5-edge', source: 'acac', target: 'acac-vp5', type: edgeType },
  { id: 'acac-vp6-edge', source: 'acac', target: 'acac-vp6', type: edgeType },
  { id: 'acac-vp1-coord1', source: 'acac-vp1', target: 'acac-coord1', type: edgeType },
  { id: 'acac-vp1-coord2', source: 'acac-vp1', target: 'acac-coord2', type: edgeType },
  { id: 'acac-vp5-ocoord1', source: 'acac-vp5', target: 'acac-overall-coord1', type: edgeType },

  { id: 'sac-vp1-edge', source: 'sac', target: 'sac-vp1', type: edgeType },
  { id: 'sac-vp2-edge', source: 'sac', target: 'sac-vp2', type: edgeType },
  { id: 'sac-vp3-edge', source: 'sac', target: 'sac-vp3', type: edgeType },
  { id: 'sac-vp4-edge', source: 'sac', target: 'sac-vp4', type: edgeType },
  { id: 'sac-vp5-edge', source: 'sac', target: 'sac-vp5', type: edgeType },
  { id: 'sac-vp1-coord1', source: 'sac-vp1', target: 'sac-coord1', type: edgeType },
  { id: 'sac-vp1-coord2', source: 'sac-vp1', target: 'sac-coord2', type: edgeType },
];
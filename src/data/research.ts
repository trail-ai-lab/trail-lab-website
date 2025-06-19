export const researchAreas = [
    {
        id: 'research-1',
        title: 'Reliability Issues in Current Approaches to Identify and Mitigate AI Bias',
        summary: `Current approaches to estimating and mitigating AI bias often fail to serve marginalized groups due to unreliable measurements and group-level oversimplifications. For instance, small group sizes and intersectional identities like Black women or Native American students make bias estimation unstable. Even well-intentioned fairness interventions sometimes worsen outcomes for vulnerable groups. This research critiques the dominant algorithmic paradigm and instead emphasizes a socio-historical, intersectional lens grounded in real-world lived experiences. We argue that fairness in AI should move beyond “2x2” demographic categories and center systems of oppression, not just population statistics.`,
        publications: ['publication-1', 'publication-2'],
        people: ['shamya-karumbaiah'],
        projects: ['aibat'],
    },
    {
        id: 'research-2',
        title: 'Stakeholder-Driven Contextual Evaluation of AI Bias: Novel Conceptions, Methods, Tools',
        summary: `Auditing AI systems for bias requires more than technical generalization—it must reflect stakeholders' pedagogical contexts and priorities. This research develops AIBAT (AI Behavior Analysis Tool), enabling teachers to define expected model behaviors and evaluate LLM fairness using student writing samples. AIBAT’s visualizations help educators interpret and modify AI behaviors in real-world classroom settings. Our pilot study with 20 teachers showed increased transparency and awareness of LLM limitations (e.g., performance in Spanish, writing quality). By reframing bias as a function of linguistic and cultural variation rather than demographic categorization, this approach offers scalable, stakeholder-aligned audits for LLMs.`,
        publications: ['publication-3', 'publication-4'],
        people: ['anurag-maravi'],
        projects: ['mllm-tool'],
    },
    {
        id: 'research-3',
        title: 'Teachers as Mediators: Understanding Practices and Values to Support Human–AI Partnerships',
        summary: `Teachers play a central role in how AI systems are used in classrooms—not just as users, but as real-time mediators of learning. This research combines multimodal analytics (teacher movement, gaze, dialogue) with surveys on pedagogical values to understand how teachers scaffold AI interactions. We found that tools enhancing teacher awareness of student needs improve learning outcomes. Our studies also show that teachers’ pedagogical orientation (e.g., behaviorist, constructivist) influences how they prioritize AI ethics, such as transparency or equity. This work informs how to design AI systems that complement human expertise and align with diverse teaching values.`,
    },
    {
        id: 'research-4',
        title: 'Tools, Analytics, and Professional Development to Facilitate Teachers’ Use of AI in Enacting Equitable Practices',
        summary: `Multilingual learners often use translanguaging—fluid movement across languages like English and Spanish—to express science ideas. Most AI systems aren’t equipped to support this. This research builds multilingual LLMs trained specifically on translanguaged data (e.g., Spanglish), and tools to help teachers recognize and assess these expressions. In collaboration with teachers and cultural experts, we’re developing analytics to support translanguaging pedagogy and real-time tools that summarize student ideas for teachers. Our goal is to re-center multilingual learners’ cultural and linguistic assets in science education, while enabling AI to disrupt English-centric biases in academic discourse and policy.`,
    },
]

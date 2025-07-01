// Term Project Selection Application
class ProjectApp {
    constructor() {
        this.projects = [
            {
                id: 1,
                title: "Delhi Taxi Stay Point Analysis",
                duration: 4,
                complexity: 6,
                area: "Spatial Informatics + AI/ML",
                tools: "Python, QGIS, GPS data",
                description: "Implement stay point detection algorithms on Delhi taxi trajectory data to identify mobility patterns",
                alignment_score: 9,
                skills: ["GPS data processing", "Python programming", "Spatial clustering"],
                deliverables: ["Stay point maps", "Mobility pattern analysis", "Policy recommendations"],
                timeline: {
                    week1: "GPS data collection and preprocessing",
                    week2: "Stay point algorithm implementation", 
                    week3: "Pattern analysis and visualization",
                    week4: "Report writing and validation"
                },
                professor_papers: ["Improved Stay Point Detection Algorithm Applied on Taxi Trajectory Data in Delhi, India (TRB 2023)"],
                learning_resources: ["Python GPS processing tutorials", "QGIS spatial analysis guides", "Stay point detection papers"],
                data_sources: ["Delhi taxi GPS datasets", "OpenStreetMap Delhi", "Traffic zone boundaries"]
            },
            {
                id: 2,
                title: "Hospital Accessibility Assessment",
                duration: 3,
                complexity: 4,
                area: "Community Studies + Spatial Informatics",
                tools: "QGIS, Network Analysis",
                description: "Evaluate spatial accessibility to healthcare facilities in Delhi using GIS network analysis",
                alignment_score: 8,
                skills: ["GIS network analysis", "Accessibility metrics", "Spatial visualization"],
                deliverables: ["Accessibility maps", "Coverage gap analysis", "Facility location recommendations"],
                timeline: {
                    week1: "Data collection and QGIS setup",
                    week2: "Network analysis and service areas",
                    week3: "Accessibility calculations and mapping"
                },
                professor_papers: ["Going to the nearest hospital vs. designated trauma centre for road traffic crashes (2019)", "Strengthening emergency medical services using dispatcher-coordinated taxis (2020)"],
                learning_resources: ["QGIS Network Analyst tutorials", "Healthcare accessibility methods", "Spatial analysis guides"],
                data_sources: ["Delhi hospital locations", "OpenStreetMap road network", "Population census data"]
            },
            {
                id: 3,
                title: "Road Safety Hotspot Mapping",
                duration: 4,
                complexity: 5,
                area: "Road Safety + Spatial Informatics",
                tools: "QGIS, Statistical analysis",
                description: "Identify and analyze traffic accident hotspots using spatial statistical methods",
                alignment_score: 9,
                skills: ["Hotspot analysis", "Spatial statistics", "Traffic safety assessment"],
                deliverables: ["Hotspot maps", "Risk factor analysis", "Safety recommendations"],
                timeline: {
                    week1: "Accident data collection",
                    week2: "Spatial analysis and hotspot identification",
                    week3: "Risk factor integration",
                    week4: "Safety recommendations"
                },
                professor_papers: ["Time series spatial analysis framework to identify prominent crash locations (2021)"],
                learning_resources: ["Spatial statistics tutorials", "Traffic safety analysis methods", "QGIS hotspot analysis"],
                data_sources: ["Delhi traffic accident data", "Road network geometry", "Traffic volume data"]
            },
            {
                id: 4,
                title: "Emergency Services Route Optimization",
                duration: 5,
                complexity: 7,
                area: "Road Safety + Spatial Informatics",
                tools: "Python, Routing APIs",
                description: "Optimize emergency vehicle routing using real-time traffic data and network analysis",
                alignment_score: 8,
                skills: ["Route optimization", "API integration", "Real-time analysis"],
                deliverables: ["Optimized routing system", "Response time analysis", "Coverage recommendations"],
                timeline: {
                    week1: "API setup and data collection",
                    week2: "Routing algorithm development",
                    week3: "Optimization implementation",
                    week4: "Testing and validation",
                    week5: "Documentation"
                },
                professor_papers: ["Strengthening emergency medical services using dispatcher-coordinated taxis (2020)", "Going to the nearest hospital vs. designated trauma centre (2019)"],
                learning_resources: ["Routing algorithm tutorials", "Google Maps API guides", "Python optimization libraries"],
                data_sources: ["Google Maps API", "Emergency facility locations", "Real-time traffic data"]
            },
            {
                id: 5,
                title: "Transit Network Coverage Analysis",
                duration: 4,
                complexity: 5,
                area: "Community Studies + Spatial Informatics",
                tools: "QGIS, GTFS data",
                description: "Analyze public transit coverage and accessibility using GTFS data and spatial methods",
                alignment_score: 7,
                skills: ["GTFS data processing", "Transit analysis", "Coverage assessment"],
                deliverables: ["Coverage maps", "Service gap analysis", "Route recommendations"],
                timeline: {
                    week1: "GTFS data preparation",
                    week2: "Coverage analysis setup",
                    week3: "Gap identification",
                    week4: "Recommendations and mapping"
                },
                professor_papers: ["Evolving term accessibility in spatial systems (2021)"],
                learning_resources: ["GTFS analysis tutorials", "Public transit planning guides", "QGIS transit tools"],
                data_sources: ["Delhi GTFS data", "Population demographics", "Land use data"]
            },
            {
                id: 6,
                title: "Road Infrastructure Resilience Assessment",
                duration: 5,
                complexity: 6,
                area: "Road Resilience + Sustainability",
                tools: "QGIS, Resilience metrics",
                description: "Assess road network resilience to climate impacts and develop adaptation strategies",
                alignment_score: 7,
                skills: ["Resilience assessment", "Climate impact analysis", "Infrastructure planning"],
                deliverables: ["Vulnerability maps", "Resilience indicators", "Adaptation strategies"],
                timeline: {
                    week1: "Infrastructure data collection",
                    week2: "Vulnerability assessment",
                    week3: "Resilience metric calculation",
                    week4: "Adaptation planning",
                    week5: "Strategy validation"
                },
                professor_papers: ["The resilience imperative: Forward thinking on Hydrogen Infrastructure (2021)", "Channelizing global evidence for mainstreaming resilient road infrastructure (2023)"],
                learning_resources: ["Climate resilience guides", "Infrastructure assessment methods", "GIS vulnerability analysis"],
                data_sources: ["Road infrastructure data", "Climate data", "Maintenance records"]
            },
            {
                id: 7,
                title: "Behavioral Travel Pattern Study",
                duration: 6,
                complexity: 8,
                area: "Behavioral Studies + Cognitive Science",
                tools: "Survey tools, Statistical analysis",
                description: "Study travel behavior patterns using surveys and cognitive science approaches",
                alignment_score: 6,
                skills: ["Survey design", "Behavioral analysis", "Statistical modeling"],
                deliverables: ["Behavior survey results", "Pattern analysis", "Policy insights"],
                timeline: {
                    week1: "Survey design and ethics approval",
                    week2: "Data collection",
                    week3: "Statistical analysis",
                    week4: "Pattern identification",
                    week5: "Behavior modeling",
                    week6: "Policy recommendations"
                },
                professor_papers: ["Evolving term accessibility in spatial systems: Contextual evaluation (2021)"],
                learning_resources: ["Survey methodology guides", "Behavioral analysis techniques", "Statistical software tutorials"],
                data_sources: ["Primary survey data", "Travel diary data", "Demographic surveys"]
            }
        ];

        this.selectedProjects = [];
        this.currentProject = null;
        this.filteredProjects = [...this.projects];
        
        this.initializeApp();
    }

    initializeApp() {
        this.bindEventListeners();
        this.renderProjects();
        this.updateProjectCount();
    }

    bindEventListeners() {
        // Filter event listeners
        document.getElementById('duration-filter').addEventListener('change', () => this.applyFilters());
        document.getElementById('complexity-filter').addEventListener('change', () => this.applyFilters());
        document.getElementById('area-filter').addEventListener('change', () => this.applyFilters());
        document.getElementById('sort-select').addEventListener('change', () => this.applySorting());
    }

    applyFilters() {
        const durationFilter = document.getElementById('duration-filter').value;
        const complexityFilter = document.getElementById('complexity-filter').value;
        const areaFilter = document.getElementById('area-filter').value;

        this.filteredProjects = this.projects.filter(project => {
            const matchesDuration = !durationFilter || project.duration.toString() === durationFilter;
            const matchesComplexity = !complexityFilter || project.complexity.toString() === complexityFilter;
            const matchesArea = !areaFilter || project.area.toLowerCase().includes(areaFilter.toLowerCase());
            
            return matchesDuration && matchesComplexity && matchesArea;
        });

        this.applySorting();
        this.updateProjectCount();
    }

    applySorting() {
        const sortBy = document.getElementById('sort-select').value;
        
        this.filteredProjects.sort((a, b) => {
            switch(sortBy) {
                case 'duration':
                    return a.duration - b.duration;
                case 'complexity':
                    return a.complexity - b.complexity;
                case 'alignment':
                    return b.alignment_score - a.alignment_score;
                case 'title':
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });

        this.renderProjects();
    }

    updateProjectCount() {
        const countElement = document.getElementById('project-count');
        if (countElement) {
            countElement.textContent = this.filteredProjects.length;
        }
    }

    clearAllFilters() {
        document.getElementById('duration-filter').value = '';
        document.getElementById('complexity-filter').value = '';
        document.getElementById('area-filter').value = '';
        document.getElementById('sort-select').value = 'alignment';
        
        this.filteredProjects = [...this.projects];
        this.applySorting();
        this.updateProjectCount();
    }

    renderProjects() {
        const grid = document.getElementById('projects-grid');
        
        if (this.filteredProjects.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <h3>No projects found</h3>
                    <p>Try adjusting your filters to see more projects.</p>
                    <button class="btn btn--secondary" onclick="app.clearAllFilters()">Clear Filters</button>
                </div>
            `;
            return;
        }

        grid.innerHTML = this.filteredProjects.map(project => `
            <div class="card project-card ${this.selectedProjects.includes(project.id) ? 'selected' : ''}" 
                 data-project-id="${project.id}">
                <div class="card__body">
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="alignment-score">${project.alignment_score}/10</div>
                    </div>
                    
                    <div class="project-meta">
                        <div class="meta-item">
                            <span>📅 ${project.duration} weeks</span>
                        </div>
                        <div class="meta-item">
                            <span>📊 Complexity: ${project.complexity}/10</span>
                        </div>
                        <div class="meta-item">
                            <span>🎯 ${project.area}</span>
                        </div>
                    </div>
                    
                    <p class="project-description">${project.description}</p>
                    
                    <div class="project-tools">
                        <strong>Tools:</strong>
                        <div class="tools-list">
                            ${project.tools.split(', ').map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="project-actions">
                        <button class="btn btn--primary" onclick="showProjectDetail(${project.id})">View Details</button>
                        <div class="checkbox-container">
                            <input type="checkbox" 
                                   id="compare-${project.id}" 
                                   ${this.selectedProjects.includes(project.id) ? 'checked' : ''}
                                   onchange="toggleProjectComparison(${project.id})">
                            <label for="compare-${project.id}">Compare</label>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    toggleProjectComparison(projectId) {
        const index = this.selectedProjects.indexOf(projectId);
        
        if (index > -1) {
            this.selectedProjects.splice(index, 1);
        } else if (this.selectedProjects.length < 3) {
            this.selectedProjects.push(projectId);
        } else {
            alert('You can compare up to 3 projects at a time.');
            // Uncheck the checkbox if limit reached
            const checkbox = document.getElementById(`compare-${projectId}`);
            if (checkbox) checkbox.checked = false;
            return;
        }
        
        this.updateComparisonPanel();
        this.renderProjects(); // Re-render to update selection styling
    }

    updateComparisonPanel() {
        const panel = document.getElementById('comparison-panel');
        const count = document.getElementById('comparison-count');
        const compareBtn = document.getElementById('compare-btn');
        const selectedContainer = document.getElementById('selected-projects');
        
        count.textContent = this.selectedProjects.length;
        compareBtn.disabled = this.selectedProjects.length < 2;
        
        if (this.selectedProjects.length > 0) {
            panel.style.display = 'block';
            selectedContainer.innerHTML = this.selectedProjects.map(id => {
                const project = this.projects.find(p => p.id === id);
                return `
                    <div class="selected-project-item">
                        ${project.title}
                        <button class="remove-project" onclick="app.toggleProjectComparison(${id})" title="Remove from comparison">×</button>
                    </div>
                `;
            }).join('');
        } else {
            panel.style.display = 'none';
        }
    }

    showProjectDetail(projectId) {
        this.currentProject = this.projects.find(p => p.id === projectId);
        
        const content = document.getElementById('project-detail-content');
        content.innerHTML = `
            <div class="project-detail-header">
                <h1>${this.currentProject.title}</h1>
                <p class="welcome-subtitle">${this.currentProject.description}</p>
                
                <div class="detail-meta">
                    <div class="detail-card">
                        <h4>Duration</h4>
                        <p>${this.currentProject.duration} weeks</p>
                    </div>
                    <div class="detail-card">
                        <h4>Complexity</h4>
                        <p>${this.currentProject.complexity}/10</p>
                    </div>
                    <div class="detail-card">
                        <h4>Research Area</h4>
                        <p>${this.currentProject.area}</p>
                    </div>
                    <div class="detail-card">
                        <h4>Alignment Score</h4>
                        <p>${this.currentProject.alignment_score}/10</p>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card__body">
                    <h3>Week-by-Week Timeline</h3>
                    <div class="timeline">
                        ${Object.entries(this.currentProject.timeline).map(([week, task]) => `
                            <div class="timeline-item">
                                <div class="timeline-week">${week.replace('week', 'Week ')}</div>
                                <div class="timeline-content">${task}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card__body">
                    <h3>Required Skills & Tools</h3>
                    <div class="skills-grid">
                        ${this.currentProject.skills.map(skill => `
                            <div class="skill-item">${skill}</div>
                        `).join('')}
                    </div>
                    <p><strong>Primary Tools:</strong> ${this.currentProject.tools}</p>
                </div>
            </div>
            
            <div class="card">
                <div class="card__body">
                    <h3>Expected Deliverables</h3>
                    <ul>
                        ${this.currentProject.deliverables.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="card">
                <div class="card__body">
                    <h3>Professor's Related Research</h3>
                    <ul>
                        ${this.currentProject.professor_papers.map(paper => `<li>${paper}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="project-actions">
                <button class="btn btn--primary btn--lg" onclick="showQuickStart()">Get Started →</button>
                <button class="btn btn--secondary" onclick="app.toggleProjectComparison(${projectId})">
                    ${this.selectedProjects.includes(projectId) ? 'Remove from' : 'Add to'} Comparison
                </button>
            </div>
        `;
        
        showScreen('project-detail');
    }

    showComparison() {
        const selectedProjectData = this.selectedProjects.map(id => 
            this.projects.find(p => p.id === id)
        );
        
        const tableContainer = document.getElementById('comparison-table-container');
        tableContainer.innerHTML = `
            <div class="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Attribute</th>
                            ${selectedProjectData.map(project => `<th>${project.title}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Duration</strong></td>
                            ${selectedProjectData.map(project => `<td>${project.duration} weeks</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Complexity</strong></td>
                            ${selectedProjectData.map(project => `<td>${project.complexity}/10</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Research Area</strong></td>
                            ${selectedProjectData.map(project => `<td>${project.area}</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Alignment Score</strong></td>
                            ${selectedProjectData.map(project => `<td>${project.alignment_score}/10</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Tools</strong></td>
                            ${selectedProjectData.map(project => `<td>${project.tools}</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Key Skills</strong></td>
                            ${selectedProjectData.map(project => `<td>${project.skills.join(', ')}</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Deliverables</strong></td>
                            ${selectedProjectData.map(project => `<td>${project.deliverables.join(', ')}</td>`).join('')}
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="card">
                <div class="card__body">
                    <h3>Recommendations</h3>
                    <div class="resource-grid">
                        ${selectedProjectData.map(project => `
                            <div class="resource-card">
                                <h4>${project.title}</h4>
                                <p><strong>Best for:</strong> ${this.getProjectRecommendation(project)}</p>
                                <button class="btn btn--primary" onclick="showProjectDetail(${project.id})">View Details</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        showScreen('comparison-screen');
    }

    getProjectRecommendation(project) {
        if (project.duration <= 4 && project.complexity <= 5) {
            return "Quick completion with moderate learning curve";
        } else if (project.alignment_score >= 8) {
            return "High alignment with professor's current research";
        } else if (project.complexity >= 7) {
            return "Advanced technical skills development";
        } else {
            return "Balanced approach to research and implementation";
        }
    }

    showQuickStart() {
        const content = document.getElementById('quick-start-content');
        content.innerHTML = `
            <div class="next-steps">
                <h4>Immediate Next Steps for: ${this.currentProject.title}</h4>
                <ol>
                    <li>Download and install required software (see resources below)</li>
                    <li>Set up your development environment</li>
                    <li>Access the recommended datasets</li>
                    <li>Review the learning resources</li>
                    <li>Start with Week 1 activities from the timeline</li>
                </ol>
            </div>
            
            <div class="quick-start-section">
                <h3>Essential Software & Tools</h3>
                <div class="resource-grid">
                    <div class="resource-card">
                        <h4>QGIS</h4>
                        <p>Free and open source GIS software</p>
                        <a href="https://qgis.org/download/" target="_blank">Download QGIS →</a>
                    </div>
                    <div class="resource-card">
                        <h4>Python for Transportation</h4>
                        <p>Transportation modeling tutorials and libraries</p>
                        <a href="https://github.com/jpn--/python-for-transportation-modeling" target="_blank">Access Resources →</a>
                    </div>
                    <div class="resource-card">
                        <h4>OpenStreetMap Data</h4>
                        <p>Extract geographical data for your project</p>
                        <a href="https://overpass-turbo.eu/" target="_blank">Get Data →</a>
                    </div>
                    <div class="resource-card">
                        <h4>Delhi Open Data</h4>
                        <p>Government datasets for Delhi</p>
                        <a href="https://data.gov.in/" target="_blank">Browse Datasets →</a>
                    </div>
                </div>
            </div>
            
            <div class="quick-start-section">
                <h3>Learning Resources</h3>
                <div class="resource-grid">
                    ${this.currentProject.learning_resources.map(resource => `
                        <div class="resource-card">
                            <h4>${resource}</h4>
                            <p>Recommended learning material for this project</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="quick-start-section">
                <h3>Data Sources</h3>
                <div class="resource-grid">
                    ${this.currentProject.data_sources.map(source => `
                        <div class="resource-card">
                            <h4>${source}</h4>
                            <p>Primary data source for your analysis</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="project-actions">
                <button class="btn btn--primary btn--lg" onclick="showProjectSelection()">Start Another Project</button>
                <button class="btn btn--secondary" onclick="showProjectDetail()">← Back to Project Details</button>
            </div>
        `;
        
        showScreen('quick-start');
    }

    clearComparison() {
        this.selectedProjects = [];
        this.updateComparisonPanel();
        this.renderProjects();
    }
}

// Global navigation functions
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showWelcome() {
    showScreen('welcome-screen');
}

function showProjectSelection() {
    showScreen('project-selection');
}

function showProjectDetail(projectId) {
    if (projectId) {
        app.showProjectDetail(projectId);
    } else {
        showScreen('project-detail');
    }
}

function showComparison() {
    app.showComparison();
}

function showQuickStart() {
    app.showQuickStart();
}

function toggleProjectComparison(projectId) {
    app.toggleProjectComparison(projectId);
}

function clearComparison() {
    app.clearComparison();
}

function clearAllFilters() {
    app.clearAllFilters();
}

// Initialize the application
const app = new ProjectApp();

// Initialize welcome screen
showScreen('welcome-screen');
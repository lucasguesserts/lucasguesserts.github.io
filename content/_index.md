---
# Leave the homepage title empty to use the site title
title: 'Lucas Guesser'
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: lucasguesser
  - block: skills
    content:
      title: Skills
      text: ''
      # Choose a user to display skills from (a folder name within `content/authors/`)
      username: lucasguesser
    design:
      columns: '1'
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Software Engineer
          company: JettaCargo - Otimização Logística
          company_url: 'https://www.jettacargo.com.br/'
          company_logo: 
          location: Florianopolis
          date_start: 2020-10-01
          date_end: 2022-11-01
          description: |2-
              * Proposed, led, and executed a Quality Assurance project, adding unit, integration, and system tests, improving both developers and managers confidence in software releases. This increased the early detection of bugs, client-reported problems, and maintenance costs
              * Played one of the main design roles in the migration of the microservices from REST to Messaging queue
              * Developed a weight-distribution model backed by experimental data which reduced traffic tickets of one client from more than 200 per year to less than 10
              * Successfully led a 3-person team to solve a bug in an algorithm that affected all our clients. Ended clients complain about the problem and made the code 100% covered by tests
              * Corrected a microservice, and made it 100% covered by tests
              * Improved the performance of a microservice in more than 99%
              * Implemented a fast and small (250 millicores, 125 MB of RAM) microservice that provide a weight limit check for loads using REST API
              
              Main Technologies: C++, Java, Python, JavaScript (Node), Shell Script, Docker, Kubernetes, AWS, Git, Linux
              
              Skills: Problem Solving, Mathematical Modelling, Algorithm Analysis, Quality Control, Automated Test Planning and Development, Code Benchmarking, Microservice Architecture
    design:
      columns: '2'
  - block: accomplishments
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: 'Courses'
      subtitle:
      # Date format: https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: 'The Structured Query Language SQL'
          organization: 'University of Colorado Boulder'
          date_start: '2024-01-15'
          date_end: '2024-01-29'
          certificate_url: 'https://coursera.org/verify/TEAMHEUFBHUU'
        - title: 'Algorithms, Part I'
          organization: 'Princeton University'
          date_start: '2023-12-01'
          date_end: '2024-01-15'
        - title: 'Dynamic Programming'
          organization: 'Udemy'
          date_start: '2023-04-01'
          date_end: '2023-04-30'
          certificate_url: 'https://ude.my/UC-1270aa54-c4e4-472e-9782-1cb41b7a9258'
        - title: 'Introduction to Probability with R'
          organization: 'Duke University'
          date_start: '2022-09-01'
          date_end: '2022-09-30'
          certificate_url: 'https://coursera.org/verify/L9C8RBWSVHSM'
        - title: 'Agile Software Development'
          organization: 'University of Minnesota'
          date_start: '2022-08-01'
          date_end: '2022-08-30'
          certificate_url: 'https://coursera.org/verify/TBKU4ADBDM7Z'
        - title: 'JavaScript Algorithms and Data Structures'
          organization: 'Free Code Camp'
          date_start: '2021-07-01'
          date_end: '2021-07-30'
          certificate_url: 'https://freecodecamp.org/certification/lucasguesserts/javascript-algorithms-and-data-structures'
        - title: 'Learn Redis from Scratch'
          organization: 'Udemy'
          date_start: '2021-07-01'
          date_end: '2021-07-30'
          certificate_url: 'https://ude.my/UC-be374b24-acff-4068-be89-47583a1ed4e9'
        - title: 'Functional Programming and Haskell'
          organization: 'Udemy'
          date_start: '2020-08-01'
          date_end: '2020-08-30'
          certificate_url: 'https://ude.my/UC-fee58a7e-5424-4714-a87c-cb9d69786566'
        - title: 'Creativity Techniques'
          organization: 'Keep Learning School'
          date_start: '2020-08-01'
          date_end: '2020-08-30'
        - title: 'Creative Re-learning'
          organization: 'Keep Learning School'
          date_start: '2020-07-01'
          date_end: '2020-07-30'
        - title: 'English as a Secondary Language'
          organization: 'Fundação Richard Hugh Fisk'
          date_start: '2011-03-14'
          date_end: '2013-07-18'
        # - certificate_url: https://www.datacamp.com
        #   date_end: '2020-12-21'
        #   date_start: '2020-07-01'
        #   description: ''
        #   icon: datacamp
        #   organization: DataCamp
        #   organization_url: https://www.datacamp.com
        #   title: 'Object-Oriented Programming in R'
        #   url: ''
    design:
      columns: '2'
  # - block: collection
  #   id: posts
  #   content:
  #     title: Recent Posts
  #     subtitle: ''
  #     text: ''
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       folders:
  #         - post
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: compact
  #     columns: '2'
  # - block: portfolio
  #   id: projects
  #   content:
  #     title: Projects
  #     filters:
  #       folders:
  #         - project
  #     # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  #     default_button_index: 0
  #     # Filter toolbar (optional).
  #     # Add or remove as many filters (`filter_button` instances) as you like.
  #     # To show all items, set `tag` to "*".
  #     # To filter by a specific tag, set `tag` to an existing tag name.
  #     # To remove the toolbar, delete the entire `filter_button` block.
  #     buttons:
  #       - name: All
  #         tag: '*'
  #       - name: Deep Learning
  #         tag: Deep Learning
  #       - name: Other
  #         tag: Demo
  #   design:
  #     # Choose how many columns the section has. Valid values: '1' or '2'.
  #     columns: '1'
  #     view: showcase
  #     # For Showcase view, flip alternate rows?
  #     flip_alt_rows: false
  # - block: markdown
  #   content:
  #     title: Gallery
  #     subtitle: ''
  #     text: |-
  #       {{< gallery album="demo" >}}
  #   design:
  #     columns: '1'
  # - block: collection
  #   id: featured
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publication
  #       featured_only: true
  #   design:
  #     columns: '2'
  #     view: card
  # - block: collection
  #   content:
  #     title: Recent Publications
  #     text: |-
  #       {{% callout note %}}
  #       Quickly discover relevant content by [filtering publications](./publication/).
  #       {{% /callout %}}
  #     filters:
  #       folders:
  #         - publication
  #       exclude_featured: true
  #   design:
  #     columns: '2'
  #     view: citation
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - event
  #   design:
  #     columns: '2'
  #     view: compact
  # - block: tag_cloud
  #   content:
  #     title: Popular Topics
  #   design:
  #     columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      # Contact (add or remove contact options as necessary)
      email: lucasguesser@protonmail.com
      phone: +55 48 98439-6818
      # Automatically link email and phone or display as text?
      autolink: true
      # # Email form provider
      # form:
      #   provider: netlify
      #   formspree:
      #     id:
      #   netlify:
      #     # Enable CAPTCHA challenge to reduce spam?
      #     captcha: false
    design:
      columns: '2'
---

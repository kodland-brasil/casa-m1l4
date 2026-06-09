player.onChat("Home", function () {
    agent.teleportToPlayer()
    agent.move(FORWARD, 1)
    agent.setItem(ICE, 1, 1)
    agent.setSlot(1)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 5; index++) {
                if (agent.inspect(AgentInspection.Block, FORWARD) != AIR) {
                    agent.destroy(FORWARD)
                }
                if (agent.inspect(AgentInspection.Block, LEFT) != AIR) {
                    agent.destroy(LEFT)
                }
                agent.place(FORWARD)
                agent.move(LEFT, 1)
            }
            if (agent.inspect(AgentInspection.Block, FORWARD) != AIR) {
                agent.destroy(FORWARD)
            }
            agent.move(FORWARD, 1)
            agent.turn(RIGHT_TURN)
            if (agent.inspect(AgentInspection.Block, LEFT) != AIR) {
                agent.destroy(LEFT)
            }
            agent.move(LEFT, 1)
        }
        agent.move(UP, 1)
    }
})
